import bcrypt from "bcryptjs";

const password = process.env.PASSWORD_TO_HASH ?? "change-me";

async function hashPassword() {
    const hash = await bcrypt.hash(password, 10);
    console.log(hash);
}

hashPassword().catch((error: unknown) => {
    console.error(error);
    process.exitCode = 1;
});