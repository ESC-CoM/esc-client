import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withRouter } from 'storybook-addon-react-router-v6';

import BackButton from '.';

export default {
  title: 'shared/BackButton',
  component: BackButton,
  decorators: [withRouter],
  argTypes: {
    className: { control: 'text' },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = function Template(args) {
  return <BackButton {...args} />;
};

export const Default = Template.bind({});
