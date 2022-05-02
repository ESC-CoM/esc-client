import { useEffect } from 'react';
import { kakaoLoginButton } from 'src/assets';
import cx from 'classnames';
import $ from './style.module.scss';

const JAVASCRIPT_KEY = '5daa5d678c0ec8f94943517a3567e8aa';

const REQUEST_PROPERTY_KEYS = [
  'kakao_account.email',
  'kakao_account.gender',
  'properties.nickname',
  'properties.profile_image',
  'kakao_account.birthday',
  'kakao_account.age_range',
];

const REQUEST_URL = '/v2/user/me';

type Props = {
  className: string;
};

export default function KakaoLogin({ className }: Props) {
  useEffect(() => window.Kakao.init(JAVASCRIPT_KEY), []);

  function onGetUserInformationSuccess(response: Kakao.API.ApiResponse) {
    console.log(response);
  }

  function onGetUserInformationFail(error: Kakao.API.ApiError) {
    console.log(error);
  }

  function getUserInformation() {
    window.Kakao.API.request({
      url: REQUEST_URL,
      data: {
        property_keys: REQUEST_PROPERTY_KEYS,
      },
      success: onGetUserInformationSuccess,
      fail: onGetUserInformationFail,
    });
  }

  function onAuthenticationSuccess({
    access_token,
  }: Kakao.Auth.AuthSuccessObject) {
    console.log(access_token);
    window.Kakao.Auth.setAccessToken(access_token);
    getUserInformation();
  }

  function onAuthenticationFail(error: Kakao.Auth.AuthError) {
    console.log(error);
  }

  function handleKakaoAuthentication() {
    Kakao.Auth.login({
      success: onAuthenticationSuccess,
      fail: onAuthenticationFail,
    });
  }

  return (
    <button
      onClick={handleKakaoAuthentication}
      className={cx(className, $.button)}
    >
      <img
        src={kakaoLoginButton}
        alt="카카오로 로그인하기"
        className={$['login-image']}
      />
    </button>
  );
}
