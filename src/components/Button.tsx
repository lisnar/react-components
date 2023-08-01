import { ComponentProps } from 'react';
import { classNames } from '../utils/classname';
import styles from './Button.module.css';

// Use ComponentProps instead of HTMLProps or HTMLAttributes.
// https://github.com/typescript-cheatsheets/react/blob/main/docs/advanced/patterns_by_usecase.md#componentprops
interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return <button className={classNames(styles.button, className)} {...props} />;
}
