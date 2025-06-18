'use client';
import React, { ReactNode, useState } from 'react';
import { Tooltip } from 'radix-ui';
import styles from './Tooltip.module.scss';

interface ITooltipRadix {
  trigger: ReactNode;
  content: ReactNode;
}

export const TooltipRadix = ({ trigger, content }: ITooltipRadix) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Tooltip.Provider>
      <Tooltip.Root delayDuration={0} open={open} onOpenChange={setOpen}>
        <Tooltip.Trigger className={styles.trigger} asChild>
          <button>{trigger}</button>
        </Tooltip.Trigger>
        {open && (
          <Tooltip.Portal container={document.getElementById('tooltipPortal')}>
            <Tooltip.Content className={styles.content} sideOffset={5} align='start' side='bottom'>
              {content}
            </Tooltip.Content>
          </Tooltip.Portal>
        )}
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
