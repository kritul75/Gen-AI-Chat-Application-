{error?.message ? (
        <p>{error.message}</p>
      ) : (
        <div>
          {/* <p>{data}</p> */}
          {loading ? (
            <p>loading...</p>
          ) : data ? (
            (function () {
              return <ReactMarkdown>{data}</ReactMarkdown>;
            })()
          ) : (
            <p>Search something to start chat</p>
          )}
        </div>
      )}