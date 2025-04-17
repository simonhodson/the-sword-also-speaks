function capitalize(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }

export function createDisplayText<T extends readonly string[]>(
    keys: T
  ): Record<T[number], string> {
    return keys.reduce<Record<T[number], string>>((acc, key) => {
      acc[key as T[number]] = capitalize(key)
      return acc;
    }, {} as Record<T[number], string>);
  }
  