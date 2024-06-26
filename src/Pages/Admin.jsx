import React from 'react';


const Admin = (user) => {
    console.log('User data in Admin:', user);
    return (
        <div className='overflow-hidden'>
            <div className="flex">
                <div className="w-64 bg-blue-900 text-white min-h-screen">
                    <div className="p-4 font-bold text-lg">TPro Admin</div>
                    <ul className="space-y-4 mt-6">
                        <li>
                            <a href="#" className="flex items-center p-2 space-x-2 hover:bg-blue-700">
                                <span>Dashboard</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 space-x-2 bg-blue-700 rounded">
                                <span>Analytics</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 space-x-2 hover:bg-blue-700">
                                <span>eCommerce</span>
                            </a>
                        </li>
                        <li className="text-gray-400 p-2">APPS</li>
                        <li>
                            <a href="#" className="flex items-center p-2 space-x-2 hover:bg-blue-700">
                                <span>Email</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                
                <div className="flex-1 p-6">
                    <header className="flex justify-between items-center">
                        <h1 className="text-2xl font-bold">Analytics</h1>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-1">
                                <span className="flag-icon flag-icon-us"></span>
                                <span>English</span>
                            </div>
                            <div className="flex items-center space-x-1">
                                <span>John Doe</span>
                            </div>
                        </div>
                    </header>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold">Welcome, {user.name}</h2>
                            <p className="text-xl font-bold">Email: {user.email}</p>
                            <img src={user.photo} alt="User" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Admin;