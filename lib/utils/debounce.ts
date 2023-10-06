export function debounce<Args extends unknown[]>(func: (...args: Args) => void, delay: number) {
    let timeoutId: NodeJS.Timeout;

    return (...args: Args) => {
        clearTimeout(timeoutId);

        timeoutId = setTimeout(() => func(...args), delay);
    };
}
