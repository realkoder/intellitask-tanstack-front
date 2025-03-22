// Field.tsx
import React from 'react';
import { twMerge } from 'tailwind-merge';
import Icon from '~/components/Icon';

type FieldProps = {
  onDragOver?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
  onPaste?: (e: React.ClipboardEvent<HTMLDivElement>) => void;
  onFocus?: (
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onClick?: (
    e: React.MouseEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onTouch?: (
    e: React.TouchEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onKeyUp?: (
    e: React.KeyboardEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  onSelect?: (
    e: React.SyntheticEvent<HTMLTextAreaElement | HTMLInputElement>,
  ) => void;
  className?: string;
  classInput?: string;
  label?: string;
  sublabel?: string;
  textarea?: boolean;
  type?: string;
  value: string | number;
  onChange: any;
  placeholder?: string;
  required?: boolean;
  icon?: string;
  optional?: boolean;
  note?: string;
  disabled?: boolean;
  maxLength?: number;
  style?: React.CSSProperties;
  autoComplete?: string;
};

const Field = React.forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FieldProps
>(
  (
    {
      onFocus,
      onClick,
      onTouch,
      onKeyUp,
      onSelect,
      className,
      classInput,
      label,
      sublabel,
      textarea,
      type,
      value,
      onChange,
      placeholder,
      required,
      icon,
      optional,
      note,
      disabled,
      maxLength,
      style,
      autoComplete,
    }: FieldProps,
    ref,
  ) => {
    return (
      <div className={`${className || ''}`} style={style}>
        <div>
          {label && (
            <div>
              <div className="flex text-base-2 font-semibold text-n-4">
                {label}
                {optional && (
                  <div className="shrink-0 ml-auto pl-5 opacity-50">
                    Optional
                  </div>
                )}
              </div>
              {sublabel && (
                <div className="flex mb-2 text-[12px] text-n-4">{sublabel}</div>
              )}
            </div>
          )}
          <div className={`relative ${textarea ? 'text-0' : ''}`}>
            {textarea ? (
              <textarea
                ref={ref as React.Ref<HTMLTextAreaElement>}
                className={`w-full h-32 px-3.5 py-2.5 bg-transparent border-2 border-n-3 rounded-xl text-base-1 text-n-7 outline-none transition-colors placeholder:text-n-4/50 resize-none focus:!border-primary-5 dark:border-n-5 dark:text-n-1 ${disabled ? 'cursor-not-allowed' : ''} ${
                  icon ? 'pl-11' : ''
                } ${classInput}`}
                value={value}
                onFocus={onFocus}
                onClick={onClick}
                onTouchStart={onTouch}
                onKeyUp={onKeyUp}
                onSelect={onSelect}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                maxLength={maxLength}
              ></textarea>
            ) : (
              <input
                ref={ref as React.Ref<HTMLInputElement>}
                className={twMerge(
                  `w-full h-12 px-3.5 bg-transparent border-2 border-n-3 rounded-xl text-base-1 text-n-7 outline-none transition-colors placeholder:text-n-4/50 focus:!border-primary-5 dark:border-n-5 dark:text-n-1 ${
                    icon ? 'pl-11' : ''
                  } ${classInput}`,
                )}
                autoComplete={autoComplete || ''}
                type={type || 'text'}
                value={value}
                onFocus={onFocus}
                onClick={onClick}
                onTouchStart={onTouch}
                onKeyUp={onKeyUp}
                onSelect={onSelect}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                maxLength={maxLength}
              />
            )}
            {icon && (
              <Icon
                className={`absolute top-3.5 left-4 fill-n-4 pointer-events-none transition-colors ${
                  value !== '' ? 'fill-n-7 dark:fill-n-1' : ''
                }`}
                name={icon}
              />
            )}
          </div>
          {note && <div className="mt-2 text-small text-n-4">{note}</div>}
        </div>
      </div>
    );
  },
);

Field.displayName = 'Field';

export default Field;
