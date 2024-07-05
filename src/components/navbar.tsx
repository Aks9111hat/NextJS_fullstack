"use client"
import Logo from "@/components/logo"
import { useUser } from '@/contexts/userContext';
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import axios from "axios"

export default function Navbar() {

    const router = useRouter();
    const { user, getUserDetails } = useUser();

    const logout = async () => {
        try {
            await axios.get('/api/users/logout');
            toast.success('Logged out successfully');
            getUserDetails();
            router.push('/login');
        } catch (error: any) {
            console.log(error.message);
            toast.error(error.message);
        }
    }

    const navSignup = () => {
        console.log("sign rpoter")
        router.push('/signup');
    }

    return (
        <nav className="flex p-4 bg-emerald-300">
            <Logo />
            {user === null ? (
                <button onClick={navSignup}>SignUp/LogIn</button>
            ) : (
                <button onClick={logout}>LogOut</button>
            )}
        </nav>
    )
}
