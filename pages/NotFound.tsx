import React, { useEffect } from "react";
import { useLocation, Link, useNavigate } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Automatically redirect to homepage after 3 seconds
    const redirectTimer = setTimeout(() => {
      navigate('/');
    }, 3000);

    return () => clearTimeout(redirectTimer);
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-parchment">
      <div className="text-center max-w-md p-6 bg-parchment-light rounded-lg shadow-lg border border-ink/20">
        <h1 className="text-5xl font-fell text-arcane mb-4">404</h1>
        <div className="mb-6 flex justify-center">
          <div className="relative w-64 h-64 bg-parchment-aged rounded-lg overflow-hidden shadow-md">
            <img
              src={`${window.location.pathname.includes('the-fools-tattered-notebook') ? '/the-fools-tattered-notebook' : ''}/404.jpg`}
              alt="You've teleported to the wrong neighborhood, Wizard!"
              className="w-full h-full object-cover"
              onError={(e) => {
                // Try to load 404.svg if 404.jpg fails
                const basePath = window.location.pathname.includes('the-fools-tattered-notebook') ? '/the-fools-tattered-notebook' : '';
                e.currentTarget.src = `${basePath}/404.svg`;

                // Add another error handler for the SVG fallback
                e.currentTarget.onerror = () => {
                  e.currentTarget.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNGQUYzRTAiLz48cGF0aCBkPSJNODAgODBDODAgNjguOTU0MyA4OC45NTQzIDYwIDEwMCA2MEMxMTEuMDQ2IDYwIDEyMCA2OC45NTQzIDEyMCA4MEMxMjAgOTEuMDQ1NyAxMTEuMDQ2IDEwMCAxMDAgMTAwQzg4Ljk1NDMgMTAwIDgwIDkxLjA0NTcgODAgODBaIiBmaWxsPSIjRkY2QjZCIi8+PHBhdGggZD0iTTY1IDEyMEM2NSAxMDguOTU0IDc0LjQwMTUgMTAwIDg2IDEwMEg5NkMxMDcuNTk4IDEwMCAxMTcgMTA4Ljk1NCAxMTcgMTIwQzExNyAxMzEuMDQ2IDEwNy41OTggMTQwIDk2IDE0MEg4NkM3NC40MDE1IDE0MCA2NSAxMzEuMDQ2IDY1IDEyMFoiIGZpbGw9IiNGRjZCNkIiLz48cGF0aCBkPSJNMTMwIDEyMEMxMzAgMTA4Ljk1NCAxMzkuNDAyIDEwMCAxNTEgMTAwSDE2MUMxNzIuNTk4IDEwMCAxODIgMTA4Ljk1NCAxODIgMTIwQzE4MiAxMzEuMDQ2IDE3Mi41OTggMTQwIDE2MSAxNDBIMTUxQzEzOS40MDIgMTQwIDEzMCAxMzEuMDQ2IDEzMCAxMjBaIiBmaWxsPSIjRkY2QjZCIi8+PHBhdGggZD0iTTQwIDEyMEM0MCAxMDguOTU0IDQ5LjQwMTUgMTAwIDYxIDEwMEg3MUM4Mi41OTg1IDEwMCA5MiAxMDguOTU0IDkyIDEyMEM5MiAxMzEuMDQ2IDgyLjU5ODUgMTQwIDcxIDE0MEg2MUM0OS40MDE1IDE0MCA0MCAxMzEuMDQ2IDQwIDEyMFoiIGZpbGw9IiNGRjZCNkIiLz48cGF0aCBkPSJNMTAwIDEyMEMxMDAgMTA4Ljk1NCAxMDguOTU0IDEwMCAxMjAgMTAwQzEzMS4wNDYgMTAwIDE0MCAxMDguOTU0IDE0MCAxMjBDMTQwIDEzMS4wNDYgMTMxLjA0NiAxNDAgMTIwIDE0MEMxMDguOTU0IDE0MCAxMDAgMTMxLjA0NiAxMDAgMTIwWiIgZmlsbD0iI0ZGNkI2QiIvPjxwYXRoIGQ9Ik04NSA4NUM4NSA4My4zNDMxIDg2LjM0MzEgODIgODggODJDODkuNjU2OSA4MiA5MSA4My4zNDMxIDkxIDg1Qzg1IDg1IDg1IDg5LjY1NjkgODUgODhaIiBmaWxsPSJibGFjayIvPjxwYXRoIGQ9Ik0xMTAgODVDMTEwIDgzLjM0MzEgMTExLjM0MyA4MiAxMTMgODJDMTE0LjY1NyA4MiAxMTYgODMuMzQzMSAxMTYgODVDMTEwIDg1IDExMCA4OS42NTY5IDExMCA4OFoiIGZpbGw9ImJsYWNrIi8+PHBhdGggZD0iTTkwIDk1QzkwIDkzLjM0MzEgOTEuMzQzMSA5MiA5MyA5Mkg5OEMxMDIgOTIgMTA3IDkyIDExMCA5NUMxMTAgOTYuNjU2OSAxMDguNjU3IDk4IDEwNyA5OEg5M0M5MS4zNDMxIDk4IDkwIDk2LjY1NjkgOTAgOTVaIiBmaWxsPSJibGFjayIvPjwvc3ZnPg==';
                  e.currentTarget.onerror = null; // Prevent infinite error loop
                };
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end">
              <p className="text-white font-patrick text-lg p-3 text-center w-full">
                You've teleported to the wrong neighborhood, Wizard!
              </p>
            </div>
          </div>
        </div>
        <p className="text-xl font-patrick text-ink mb-4">This magical page doesn't exist in this realm!</p>
        <p className="font-patrick text-ink-faded mb-6">The arcane forces are redirecting you to the grimoire's main page in 3 seconds...</p>
        <Link
          to="/"
          className="inline-block px-4 py-2 bg-arcane text-white font-patrick rounded-md hover:bg-arcane/80 transition-colors"
        >
          Return to the Sanctuary Now
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
