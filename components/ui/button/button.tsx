import clsx from 'clsx';
import React from 'react';
import { Spinner } from '../spinner';
import { buttonBlockStyles, renderButtonIcon } from './utils/helpers';
import { ButtonProps } from './utils/types';

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      icon,
      block,
      iconPosition,
      isLoading,
      size,
      primary,
      loadingText,
      children,
      ...rest
    },
    ref
  ) => (
    <button
      ref={ref}
      className={clsx(
        buttonBlockStyles(block, iconPosition),
        'px-2 py-2 justify-center text-sm font-medium shadow rounded-md',
        primary
          ? 'bg-quranmemo-primary text-white hover:bg-[#E0EFEE] hover:text-[#20b2aa]'
          : 'bg-quranmemo-secondary text-[#20b2aa] hover:bg-[#5EEAD3] hover:text-white',
        className
      )}
      {...rest}
    >
      {renderButtonIcon({
        icon: isLoading ? Spinner : icon,
        size,
        additionalClasses: isLoading ? 'animate-spin' : undefined,
        iconPosition,
      })}
      {isLoading ? loadingText : children}
    </button>
  )
);

Button.displayName = 'Button';

//   return (
//     <>
//       <button className="">
//         {text}
//       </button>
//     </>
//   );
