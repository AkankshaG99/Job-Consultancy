import React, { useEffect, useState } from "react";
import Footer from "../assets/Pages/Footer";
import { FaBell } from "react-icons/fa";
import {getUserDetails} from "../Utils/Api.utils"
 
const ProfilePage = () => {
    const [userData, setUserData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [loading, setLoading] = useState(true);

    const userName = localStorage.getItem("userName");
    const id = localStorage.getItem("id")
 
  const handleEdit = () => setIsEditing(!isEditing);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getUserDetails({ id: id });
        setUserData(data?.data?.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  console.log(userData, "oooooooooo")

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <div className="flex flex-col items-center space-y-3">
          <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-600 font-medium">Loading profile...</p>
        </div>
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-50">
        <p className="text-gray-500">No user data found.</p>
      </div>
    );
  }
  console.log(setUserData)

  return (
    <>
      <div className="min-h-screen bg-gray-50 p-6 md:px-14 md:pt-5">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold text-gray-800">
            Welcome, {userName}
          </h2>
          <button className="p-3 bg-gray-100 rounded-full">
            <FaBell className="text-gray-600 w-6 h-6" />
          </button>
        </div>

        <div className="bg-white shadow rounded-2xl p-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
            <div className="flex items-center space-x-4">
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="Profile"
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-800">
                  {userData.username}
                </h3>
                <p className="text-gray-500">Software Developer</p>
              </div>
            </div>
            <button
              onClick={handleEdit}
              className="mt-4 md:mt-0 bg-[#1976d2] hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
            >
              {isEditing ? "Save" : "Edit"}
            </button>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-600 mb-2">Full Name</label>
              <input
                type="text"
                value={userData.username || ""}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Email</label>
              <input
                type="email"
                value={userData.email || ""}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Mobile</label>
              <input
                type="text"
                value={userData.phone || ""}
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
                onChange={(e) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Gender</label>
              <select
                value={userData.gender || ""}
                onChange={(e) =>
                  setUserData({ ...userData, gender: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              >
                <option value="">Select</option>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Address</label>
              <input
                type="text"
                value={userData.address || ""}
                onChange={(e) =>
                  setUserData({ ...userData, address: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">State</label>
              <input
                type="text"
                value={userData.state || ""}
                onChange={(e) =>
                  setUserData({ ...userData, state: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Country</label>
              <input
                type="text"
                value={userData.country || ""}
                onChange={(e) =>
                  setUserData({ ...userData, country: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Pin Code</label>
              <input
                type="text"
                value={userData.pin || ""}
                onChange={(e) =>
                  setUserData({ ...userData, pin: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-2">Resume</label>
              <input
                type="file"
                id="resumeUpload"
                accept=".pdf,.doc,.docx"
                className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
                disabled={!isEditing}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
 
//   return (
//     <>
//       <div className="min-h-screen bg-gray-50 p-6 md:px-14 md:pt-5">
//         <div className="flex justify-between items-center mb-5">
//           <div>
//             <h2 className="text-xl font-semibold text-gray-800">
//               Welcome, {userName}
//             </h2>
//           </div>
 
//           <div className="flex items-center space-x-4">
           
//             <button className="p-3 bg-gray-100 rounded-full">
//               <FaBell className="text-gray-600 w-6 h-6" />
//             </button>
           
//           </div>
//         </div>
 
//         <div className="bg-white shadow rounded-2xl p-8">
//           <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
//             <div className="flex items-center space-x-4">
//               <img
//                  src="https://i.pravatar.cc/40?img=5"
//                 alt="Profile"
//                 className="w-16 h-16 rounded-full"
//               />
//               <div>
//                 <h3 className="text-lg font-semibold text-gray-800">
//                   {userName}
//                 </h3>
//                 <p className="text-gray-500">Software Developer</p>
//               </div>
//             </div>
//             <button
//               onClick={handleEdit}
//               className="mt-4 md:mt-0 bg-[#1976d2] hover:bg-blue-700 text-white px-5 py-2 rounded-lg transition-all"
//             >
//               {isEditing ? "Save" : "Edit"}
//             </button>
//           </div>
 
//           <div className="grid md:grid-cols-2 gap-6">
//             <div>
//               <label className="block text-gray-600 mb-2">Full Name</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Email</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Mobile</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Gender</label>
//               <select
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               >
//                 <option>Select</option>
//                 <option>Male</option>
//                 <option>Female</option>
//               </select>
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Address</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">State</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Country</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Pin Code</label>
//               <input
//                 type="text"
//                 placeholder="Your First Name"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
 
//             <div>
//               <label className="block text-gray-600 mb-2">Resume</label>
//               <input
//                 type="file"
//                 id="resumeUpload"
//                 accept=".pdf,.doc,.docx"
//                 className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring focus:ring-blue-100"
//                 disabled={!isEditing}
//               />
//             </div>
//           </div>
 
       
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
};
 
export default ProfilePage;