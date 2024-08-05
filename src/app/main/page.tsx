const Main = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-300">
      {/* Left Sidebar */}
      <div className="w-64 bg-gray-800 p-4">
        <div className="mb-4">
          <input 
            type="text" 
            placeholder="Search for item..." 
            className="w-full bg-gray-700 px-3 py-2 rounded"
          />
        </div>
        <div>
          <h2 className="font-bold mb-2">Functions</h2>
          <h2 className="font-bold mb-2">Tables</h2>
          <ul className="space-y-1">
            <li>_prisma_migrations</li>
            <li>action_logs</li>
            <li>admins</li>
            {/* Add more table names */}
          </ul>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Bar */}
        <div className="bg-gray-800 p-4">
          <span className="text-sm">SQL LOCAL | MySQL 8.4.1 : TLSv1.3 : 192.168.1.241 : rental</span>
        </div>
        
        {/* Content Area */}
        <div className="flex-1 flex flex-col items-center justify-center p-4">
          {/* You'd need to add the actual image here */}
          <div className="text-blue-400 mb-4">
            {/* Placeholder for the image */}
            [Image of characters]
          </div>
          <p className="text-gray-500">Console log, please execute a query</p>
          <p className="text-gray-500">or select a table to see the log</p>
        </div>
        
        {/* Bottom Bar */}
        <div className="bg-gray-800 p-4 flex items-center">
          <button className="bg-gray-700 px-3 py-1 rounded mr-2">+</button>
          <label className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span>Enable syntax highlighting</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Main;
