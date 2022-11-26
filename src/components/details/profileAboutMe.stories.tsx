import { ComponentStory, Meta } from "@storybook/react";
import { ProfileAboutMe } from "./profileAboutMe";

export default {
  title: "Profiles/AboutMe",
  component: ProfileAboutMe,
} as Meta<typeof ProfileAboutMe>;

const profileProps = {
  profileUsername: "username",
  profileGender: "male",
  profileAge: 27,
  profileEmail: "marcos@gmail.com",
  profilePhone: "8199999",
};

export const Default: ComponentStory<typeof ProfileAboutMe> = (args) => {
  return <ProfileAboutMe {...args} />;
};

const DefineArgs = Default.bind({});

DefineArgs.args = profileProps;
