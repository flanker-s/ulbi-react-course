type Mods = Record<string, boolean | string>;

export function classNames(className: string, mods: Mods = {}, additional: string[] = []): string {
    return [
        className,
        ...Object.entries(mods)
            .filter(([className, value]) => Boolean(value))
            .map(([className, value]) => className),
        ...additional.filter(Boolean)
    ].join(' ');
}