// contexts/UserContext.tsx
"use client"
import React, { createContext, useState, useContext, useEffect, ReactNode } from 'react';
import axios from 'axios';

interface User {
    _id: string;
    // add other fields as per your user data
}

interface UserContextProps {
    user: User | null;
    getUserDetails: () => Promise<void>;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    const getUserDetails = async () => {
        try {
            const res = await axios.get('/api/users/me');
            if(res.data.success){
                setUser(res.data.data);
            }else{
                setUser(null)
            }
        } catch (error) {
            console.error("Error fetching user details:", error);
            setUser(null);
        }
    };

    useEffect(() => {
        getUserDetails();
    }, []);

    return (
        <UserContext.Provider value={{ user, getUserDetails }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};
