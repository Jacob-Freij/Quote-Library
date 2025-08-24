
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Prevent scrolling on the webpage
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = original;
    };
  }, []);
  const [quote, setQuote] = useState<string | null>(null);
  const [author, setAuthor] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [savedQuotes, setSavedQuotes] = useState<string>("");

  // Load saved quotes from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem('savedQuotes');
    if (stored) setSavedQuotes(stored);
  }, []);

  // Save quotes to localStorage whenever savedQuotes changes
  useEffect(() => {
    localStorage.setItem('savedQuotes', savedQuotes);
  }, [savedQuotes]);

  // Fetch a new quote
  const fetchQuote = () => {
    setLoading(true);
    setError(null);
    fetch('https://corsproxy.io/?https://zenquotes.io/api/random')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data) && data[0]) {
          setQuote(data[0].q);
          setAuthor(data[0].a);
        } else {
          setError('Received response from Api, but no quote found.');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to fetch quote.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <div className="flex-1 flex flex-col justify-center items-center">
  <h1 className="text-3xl font-bold text-center mb-6 mt-10">Quote Library: Seeking Information, Motivation or Inspiration</h1>

        {/* Fixed-size quote/author container */}
        <div className="flex items-center justify-center w-[800px] h-[200px] mb-6">
          <div className="bg-white rounded-lg shadow-md p-8 w-full h-full flex flex-col justify-center">
            {loading ? (
              <p className="text-gray-500 text-center">Loading...</p>
            ) : error ? (
              <p className="text-red-500 text-center">{error}</p>
            ) : (
              <>
                
                <h3 className="text-xl italic text-center mb-4">"{quote}"</h3>   
                <p className="text-right font-semibold text-gray-700">- {author}</p>
              </>
            )}
          </div>
        </div>
        <div className="flex flex-row justify-center gap-6 mb-4">
          <button
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
            onClick={() => {
              if (quote && author) {
                const newEntry = `"${quote}" - ${author}`;
                // Prevent duplicate saves
                setSavedQuotes((prev) => {
                  const lines = prev.split('\n').map(line => line.trim()).filter(Boolean);
                  if (lines.includes(newEntry)) {
                    return prev; // Already saved
                  }
                  return prev + newEntry + '\n';
                });
              }
            }}
          >
            Save
          </button>
          <button
            className="px-6 py-2 rounded-full bg-gray-700 text-white font-medium shadow hover:bg-gray-800 transition"
            onClick={fetchQuote}
          >
            Reroll
          </button>
          <button
            className="px-6 py-2 rounded-full bg-red-600 text-white font-medium shadow hover:bg-red-700 transition"
            onClick={() => {
              setSavedQuotes((prev) => {
                const lines = prev.trimEnd().split('\n');
                lines.pop();
                return lines.length ? lines.join('\n') + '\n' : '';
              });
            }}
          >
            Undo
          </button>
        </div>
      </div>
      {/* Fixed  textbox */}
      <div className="fixed bottom-0 left-0 right-0 pb-6 z-50 bg-transparent">
        <div className="mx-auto w-[500px] h-[500px]">
          <textarea
            className="w-[1300px] h-[200px] p-6 rounded-lg border border-gray-300 shadow bg-white text-gray-800 resize focus:outline-none focus:ring-2 focus:ring-blue-400 text-xl"
            placeholder="Saved quotes will appear here..."
            value={savedQuotes}
            readOnly
          />
        </div>
      </div>
    </div>
  );
}

export default App;