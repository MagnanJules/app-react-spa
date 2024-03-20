import React from 'react';
import Button from './Button';

const GridExample = () => {
    return (
        <div>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <div className="bg-blue-500 p-4 text-white">Column 1</div>
          <div className="bg-red-500 p-4 text-white">Column 2</div>
          <div className="bg-green-500 p-4 text-white">Column 3</div>
        </section>
        <Button>Click</Button>
        </div>
      );
};
    
export default GridExample;