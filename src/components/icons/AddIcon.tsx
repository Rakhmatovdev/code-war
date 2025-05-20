import Icon from "@ant-design/icons/lib/components/Icon";

import type { ReactElement } from "react";
import type { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";

const defaultIcon = (): React.ReactElement => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none">
    <path
      d="M7.9987 5.33398V10.6673M10.6654 8.00065L5.33203 8.00065"
      stroke="currentColor"
      strokeWidth="1.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14.6654 8.0013C14.6654 4.3194 11.6806 1.33464 7.9987 1.33464C4.3168 1.33464 1.33203 4.3194 1.33203 8.0013C1.33203 11.6832 4.3168 14.668 7.9987 14.668C11.6806 14.668 14.6654 11.6832 14.6654 8.0013Z"
      stroke="currentColor"
      strokeWidth="1.2"
    />
  </svg>
);

export default function AddCircleIcon(
  props: Partial<CustomIconComponentProps>
): ReactElement {
  return <Icon component={defaultIcon}  {...props} />;
}
