export function progress(current: number, target: number) {
    if (target === 0) {
        return 0;
    }

    return current/target;
}