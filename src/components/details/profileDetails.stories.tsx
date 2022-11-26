import { ComponentStory, Meta } from "@storybook/react";
import { ProfileDetails } from "./profileDetails";

export default {
  title: "Profiles/Address",
  component: ProfileDetails,
} as Meta<typeof ProfileDetails>;

const profileProps = {
  profilePicture: "",
  profileName: "Marcos",
  profileLastName: "Eduardo",
};

export const Default: ComponentStory<typeof ProfileDetails> = (args) => {
  return <ProfileDetails {...args} />;
};

const DefineArgs = Default.bind({});

DefineArgs.args = profileProps;
