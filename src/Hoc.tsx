import * as React from "react";

type HocProps = {
  hocLabel: string;
};

export function withHoc<T>(WrappedComponent: React.FC<HocProps & React.PropsWithChildren<T>>) {
  return (props: HocProps & T) => {
    const { hocLabel } = props;
    return (
      <div>
        <span>{hocLabel}</span>
        <WrappedComponent {...props} />
      </div>
    );
  };
}
