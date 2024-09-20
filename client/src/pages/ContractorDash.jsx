import React, { useState, useEffect } from 'react';

function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 !== 0;

  return (
    <div className="flex items-center">
      {[...Array(5)].map((_, index) => (
        <span
          key={index}
          className={`text-2xl ${
            index < fullStars
              ? 'text-yellow-400'
              : index === fullStars && hasHalfStar
              ? 'text-yellow-400'
              : 'text-gray-300'
          }`}
        >
          {index < fullStars || (index === fullStars && hasHalfStar) ? '★' : '☆'}
        </span>
      ))}
      <span className="ml-2 text-gray-600">{rating.toFixed(1)}</span>
    </div>
  );
}

function ContractorDash() {
  const [contractor, setContractor] = useState({ name: '', email: '' });
  const [contracts, setContracts] = useState([]);
  const [successfulContracts, setSuccessfulContracts] = useState([]);
  const [ongoingDeals, setOngoingDeals] = useState([]);

  useEffect(() => {
    fetchContractorDetails();
    fetchContracts();
    fetchSuccessfulContracts();
    fetchOngoingDeals();
  }, []);

  const fetchContractorDetails = async () => {
    // Replace with your API call
    const contractorData = {
      name: 'Rajiv Sharma',
      email: 'rajiv@example.com',
    };
    setContractor(contractorData);
  };

  const fetchContracts = async () => {
    // Replace with your API call
    const contractsData = [
      { id: 1, productName: 'Tomatoes', farmer: 'Madhav Verma', amount: '₹500' },
      { id: 2, productName: 'Potatoes', farmer: 'Anil Kumar', amount: '₹600' },
      { id: 3, productName: 'Wheat', farmer: 'Ram Singh', amount: '₹550' },
      { id: 4, productName: 'Rice', farmer: 'Pawan Patel', amount: '₹700' },
      { id: 5, productName: 'Onions', farmer: 'Mohan Lal', amount: '₹400' },
      { id: 6, productName: 'Carrots', farmer: 'Suresh Pandey', amount: '₹450' },
    ];
    setContracts(contractsData);
  };

  const fetchSuccessfulContracts = async () => {
    // Replace with your API call
    const successfulContractsData = [
      { id: 1, productName: 'Tomatoes', farmer: 'Madhav Verma', rating: 4.5, weight: 500 },
      { id: 2, productName: 'Potatoes', farmer: 'Anil Kumar', rating: 5, weight: 1000 },
      { id: 3, productName: 'Wheat', farmer: 'Ram Singh', rating: 4, weight: 2000 },
      { id: 4, productName: 'Rice', farmer: 'Pawan Patel', rating: 4.8, weight: 1500 },
    ];
    setSuccessfulContracts(successfulContractsData);
  };

  const fetchOngoingDeals = async () => {
    // Replace with your API call
    const ongoingDealsData = [
      { id: 1, productName: 'Apples', farmer: 'Vikram Yadav', closedDate: '2024-05-15', expectedCompletion: '2024-09-15', status: 'In Progress' },
      { id: 2, productName: 'Grapes', farmer: 'Sanjay Gupta', closedDate: '2024-06-01', expectedCompletion: '2024-08-30', status: 'Pending Delivery' },
      { id: 3, productName: 'Mangoes', farmer: 'Priya Sharma', closedDate: '2024-05-20', expectedCompletion: '2024-07-20', status: 'Quality Check' },
    ];
    setOngoingDeals(ongoingDealsData);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Contractor Details at the top */}
      <div className="bg-blue-600 text-white p-6 mb-6">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Contractor Dashboard</h1>
          <p className="text-xl mt-2">Welcome, {contractor.name}</p>
          <p className="text-lg">Email: {contractor.email}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Available Contracts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contracts.map((contract) => (
            <div key={contract.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{contract.productName}</h3>
                <p className="text-gray-600 mb-4">Available contract for {contract.productName}.</p>
                <div className="mb-4">
                  <p className="font-semibold">Farmer: {contract.farmer}</p>
                  <p className="text-gray-600">Amount Offered: {contract.amount}</p>
                </div>
                <div className="flex justify-end space-x-2">
                  <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors">
                    Accept
                  </button>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors">
                    Decline
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ongoing Deals Table */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Ongoing Deals</h2>
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
      </div>

      {/* Successful Contracts Table */}
      <div className="container mx-auto px-4 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Successful Contracts</h2>
        <div className="bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Farmer</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight (kg)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rating</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {successfulContracts.map((contract) => (
                <tr key={contract.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{contract.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contract.farmer}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contract.weight}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StarRating rating={contract.rating} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Logout Button at bottom right */}
      <div className="container mx-auto px-4 py-4 mt-auto">
        <div className="flex justify-end">
          <button
            className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContractorDash;