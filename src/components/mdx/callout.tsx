/** Originally from `shadcn/ui-docs`
 * @link https://github.com/shadcn/ui/blob/main/apps/www/components/callout.tsx
 */
import * as React from "react";

import { Alert, AlertDescription, AlertTitle } from "~/components/ui/alert";

type CalloutProps = {
  icon?: string;
  title?: string;
} & React.PropsWithChildren;

export function Callout({ title, children, icon, ...props }: CalloutProps) {
  return (
    <Alert {...props}>
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription>{children}</AlertDescription>
    </Alert>
  );
}
