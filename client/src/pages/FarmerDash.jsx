import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Carousel from '../component/Carousel';

function FarmerDash() {
  const [farmer, setFarmer] = useState({ name: '', email: '' });
  const [bids, setBids] = useState([]);
  const [successfulContracts, setSuccessfulContracts] = useState([]);
  const [cropSales, setCropSales] = useState([]);
  const [contractorStats, setContractorStats] = useState([]);
  const [ongoingDeals, setOngoingDeals] = useState([]);
  const [monthlySales, setMonthlySales] = useState([]);

  useEffect(() => {
    fetchFarmerDetails();
    fetchBids();
    fetchSuccessfulContracts();
    fetchCropSales();
    fetchContractorStats();
    fetchOngoingDeals();
    fetchMonthlySales();
  }, []);

  const fetchFarmerDetails = async () => {
    const farmerData = {
      name: 'Madhav Verma',
      email: 'madhav@example.com'
    };
    setFarmer(farmerData);
  };

  const fetchBids = async () => {
    const bidsData = [
      { id: 1, productName: 'Tomatoes', contractor: 'Kisan Kumar', amount: '₹500' },
      { id: 2, productName: 'Potatoes', contractor: 'Suraj Singh', amount: '₹600' },
      { id: 3, productName: 'Wheat, Rice', contractor: 'Sitaram Chand', amount: '₹550' },
    ];
    setBids(bidsData);
  };

  const fetchSuccessfulContracts = async () => {
    const contractsData = [
      { id: 1, crop: 'Wheat', quantity: '100 kg', amount: '₹2000', date: '2024-08-15' },
      { id: 2, crop: 'Rice', quantity: '50 kg', amount: '₹1500', date: '2024-08-20' },
      { id: 3, crop: 'Tomatoes', quantity: '200 kg', amount: '₹3000', date: '2024-08-25' },
    ];
    setSuccessfulContracts(contractsData);
  };

  const fetchCropSales = async () => {
    const salesData = [
      { crop: 'Wheat', quantity: '500 kg', revenue: '₹10000' },
      { crop: 'Rice', quantity: '300 kg', revenue: '₹9000' },
      { crop: 'Tomatoes', quantity: '400 kg', revenue: '₹6000' },
      { crop: 'Potatoes', quantity: '350 kg', revenue: '₹5250' },
    ];
    setCropSales(salesData);
  };

  const fetchContractorStats = async () => {
    const statsData = [
      { contractor: 'Kisan Kumar', contracts: 5, rating: 4.5 },
      { contractor: 'Suraj Singh', contracts: 3, rating: 4.2 },
      { contractor: 'Sitaram Chand', contracts: 2, rating: 4.8 },
    ];
    setContractorStats(statsData);
  };

  const fetchOngoingDeals = async () => {
    const dealsData = [
      { id: 1, productName: 'Wheat', farmer: 'Kisan Kumar', closedDate: '2024-09-01', expectedCompletion: '2024-10-15', status: 'In Progress' },
      { id: 2, productName: 'Rice', farmer: 'Suraj Singh', closedDate: '2024-09-05', expectedCompletion: '2024-10-20', status: 'Pending Delivery' },
      { id: 3, productName: 'Tomatoes', farmer: 'Sitaram Chand', closedDate: '2024-09-10', expectedCompletion: '2024-09-25', status: 'Completed' },
    ];
    setOngoingDeals(dealsData);
  };

  const fetchMonthlySales = async () => {
    const salesData = [
      { month: 'July', wheat: 5000, rice: 4000, tomatoes: 3000, potatoes: 2000 },
      { month: 'August', wheat: 6000, rice: 4500, tomatoes: 3500, potatoes: 2500 },
      { month: 'September', wheat: 5500, rice: 5000, tomatoes: 4000, potatoes: 3000 },
    ];
    setMonthlySales(salesData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Carousel/>
      <div className="bg-green-100 p-4 mb-4 ">
        <div className="container mx-auto">
          <h1 className="text-2xl font-bold">Farmer: {farmer.name}</h1>
          <p className="text-lg">Email: {farmer.email}</p>
        </div>
      </div>

      <div className="flex-grow container mx-auto px-4 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">Current Bids</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {bids.map(bid => (
              <div key={bid.id} className="bg-white rounded-lg shadow-md p-4">
                <h3 className="font-bold">{bid.productName}</h3>
                <p className="text-sm text-gray-600">Freshly harvested produce available for sale.</p>
                <div className="mt-2">
                  <p><span className="font-semibold">Contractor:</span> {bid.contractor}</p>
                  <p><span className="font-semibold">Amount Offered:</span> {bid.amount}</p>
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                  <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">Accept</button>
                  <button className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">Decline</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Crop Sales - Last 3 Months</h2>
          <div className="bg-white p-4 rounded-lg shadow-md" style={{ height: '400px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlySales}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="wheat" fill="#8884d8" />
                <Bar dataKey="rice" fill="#82ca9d" />
                <Bar dataKey="tomatoes" fill="#ffc658" />
                <Bar dataKey="potatoes" fill="#ff7300" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Contractor Statistics</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Contractor</th>
                  <th className="p-3 text-left">Successful Contracts</th>
                  <th className="p-3 text-left">Rating</th>
                </tr>
              </thead>
              <tbody>
                {contractorStats.map((stat, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{stat.contractor}</td>
                    <td className="p-3">{stat.contracts}</td>
                    <td className="p-3">{stat.rating} / 5</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Ongoing Contracts</h2>
          <div className="bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Closed Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Expected Completion</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {ongoingDeals.map((deal) => (
                  <tr key={deal.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.productName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.farmer}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.closedDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{deal.expectedCompletion}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        deal.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                        deal.status === 'Pending Delivery' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {deal.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Last Month's Successful Contracts</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Crop</th>
                  <th className="p-3 text-left">Quantity</th>
                  <th className="p-3 text-left">Amount</th>
                  <th className="p-3 text-left">Date</th>
                </tr>
              </thead>
              <tbody>
                {successfulContracts.map(contract => (
                  <tr key={contract.id} className="border-b">
                    <td className="p-3">{contract.crop}</td>
                    <td className="p-3">{contract.quantity}</td>
                    <td className="p-3">{contract.amount}</td>
                    <td className="p-3">{contract.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">Total Crop Sales Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white shadow-md rounded-lg">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-3 text-left">Crop</th>
                  <th className="p-3 text-left">Quantity Sold</th>
                  <th className="p-3 text-left">Total Revenue</th>
                </tr>
              </thead>
              <tbody>
                {cropSales.map((sale, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-3">{sale.crop}</td>
                    <td className="p-3">{sale.quantity}</td>
                    <td className="p-3">{sale.revenue}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>

      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-end">
          <button
            className="px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default FarmerDash;