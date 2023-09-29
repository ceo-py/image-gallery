export function passwordValidation(password) {
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=\S+$).{6,}$/.test(password)) {
        return 'A password must include an uppercase letter, a lowercase letter, a number, and be at least 6 characters long with no spaces.';
    }
}
