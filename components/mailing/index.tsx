'use client';

import { useState } from 'react';
import { parseError } from '@/lib/error';
import { isValidEmail } from '@/lib/utils';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import type { FC, FormEventHandler } from 'react';

export const MailingList: FC = () => {
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const { toast } = useToast();

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    const time = new Date();
    const timestamp = time.valueOf();
    const previousTimestamp = localStorage.getItem('loops-form-timestamp');

    if (disabled) {
      return;
    }

    setDisabled(true);

    try {
      if (
        previousTimestamp &&
        Number(previousTimestamp) + 60 * 1000 > timestamp
      ) {
        throw new Error('Too many signups, please try again in a little while');
      }

      localStorage.setItem('loops-form-timestamp', timestamp.toString());

      if (!isValidEmail(email)) {
        throw new Error('Please enter a valid email');
      }

      const formBody = new URLSearchParams({
        email,
      });

      const response = await fetch(
        'https://x8ki-letl-twmt.n7.xano.io/api:ShWkjypC/contacts',
        {
          method: 'POST',
          body: JSON.stringify({
            name: '',
            email: email,
            message: '',
          }),

          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      const data = (await response.json()) as {
        message?: string;
      };

      if (response.status === 429) {
        throw new Error('Too many signups, please try again in a little while');
      }

      if (!response.ok) {
        throw new Error(data.message ?? response.statusText);
      }

      setEmail('');
      toast({ description: "Thanks! We'll be in touch!" });
    } catch (error) {
      const message = parseError(error);

      toast({
        description: message,
        variant: 'destructive',
      });
    } finally {
      localStorage.setItem('loops-form-timestamp', '');
      setDisabled(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row sm:items-center gap-2 max-w-sm w-full"
    >
      <Input
        type="text"
        name="email"
        placeholder="you@example.com"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        required
        className="bg-white dark:bg-neutral-900"
      />
      <Button
        type="submit"
        className="shrink-0"
        disabled={disabled || !email.trim() || !isValidEmail(email)}
      >
        {disabled ? 'Subscribing...' : 'Subscribe'}
      </Button>
    </form>
  );
};
