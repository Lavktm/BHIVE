import clsx from 'clsx';
import React from 'react';

export type TextProps = {
  fontFamily?: 'normal' | 'medium' | 'bold';
  textAlign?: 'start' | 'center' | 'justify' | 'left' | 'right' | 'end';
  className?: string;
  value: string;
  sub?: string;
  sup?: string;
  subClassName?: string;
  supClassName?: string;
};

const fontFamilyClasses = {
  normal: 'font-normal',
  medium: 'font-medium',
  bold: 'font-bold',
};

const textAlignClasses = {
  start: 'text-start',
  center: 'text-center',
  justify: 'text-justify',
  left: 'text-left',
  right: 'text-right',
  end: 'text-end',
};

const Text = ({
  fontFamily = 'normal',
  textAlign = 'left',
  className = '',
  value = '',
  sub = '',
  sup = '',
  supClassName = '',
  subClassName = '',
}: TextProps) => {
  return (
    <span
      className={clsx(
        `inline-block ${fontFamilyClasses[fontFamily]} ${textAlignClasses[textAlign]}`,
        className,
      )}
    >
      {value}
      {sub && <sub className={clsx('subs', subClassName)}>{sub}</sub>}
      {sup && <sup className={clsx('sups', supClassName)}>{sup}</sup>}
    </span>
  );
};

export default Text;
