import { ComponentStory, Meta } from "@storybook/react";
import { Pagination } from "./index";
import { paginationProps } from "./pagination.mock";

export default {
  title: "Pagination/Default",
  component: Pagination,
} as Meta<typeof Pagination>;

export const Default: ComponentStory<typeof Pagination> = (args) => {
  return <Pagination {...args} />;
};

const DefineArgs = Default.bind({});

DefineArgs.args = paginationProps
