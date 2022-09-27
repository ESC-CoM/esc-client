import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import FooterButton from 'src/components/shared/FooterButton';
import { PageLayout } from 'src/components/shared/Layout';
import PasswordInput from 'src/components/shared/PasswordInput';

import $ from './style.module.scss';
import schema from './yup';

type FormData = {
  oldPassword: string;
  newPassword: string;
  newPasswordConfirm: string;
};

export default function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: yupResolver(schema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <PageLayout isNeedFooter={false} headerHeight={44}>
      <form className={$.container} onSubmit={onSubmit}>
        <PasswordInput
          className={$['password-input']}
          id="old-password"
          proptype="register"
          errorMessage={errors.oldPassword?.message}
          register={register('oldPassword')}
          label="기존 비밀번호"
        />
        <PasswordInput
          className={$['password-input']}
          id="new-password"
          proptype="register"
          errorMessage={errors.newPassword?.message}
          register={register('newPassword')}
          label="새 비밀번호"
        />
        <PasswordInput
          className={$.password}
          id="new-password-confirm"
          proptype="register"
          errorMessage={errors.newPasswordConfirm?.message}
          register={register('newPasswordConfirm')}
          label="새 비밀번호 확인"
        />
        <FooterButton text="변경하기" type="submit" />
      </form>
    </PageLayout>
  );
}
