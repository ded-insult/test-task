import { ComponentPropsWithRef, memo } from 'react';

interface Props extends ComponentPropsWithRef<'input'> {
  label: string;
}

export const Textfield = memo(function Textfield(props: Props) {
  const { type = 'text', label, ref, ...rest } = props;

  return (
    <div>
      {label && <p>{label}</p>}
      <input {...rest} ref={ref} type={type} />
    </div>
  );
});
