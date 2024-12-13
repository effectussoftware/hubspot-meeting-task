# Improvements

I would start by using a modular architecture, organizing models, services, and utilities into distinct folders. The HubSpot logic should be encapsulated in its own service with methods that can be called as needed by the process functions and each process method should be broken down into smaller, single-responsibility functions. Magic numbers should be replaced with descriptive constants, such as the ones used for retries and timeouts.

To improve the performence, I would start by parallelizing the processing of contacts, companies, and meetings using queues, since each process handles its own data, process and pushed the actions independenlty we could use concurrency to improve the performance. I would also suggest caching frequently used data, like access tokens to reduce unnecessary API calls. Logging could also be improved to track more errors and reasons for retries that are not currenlty tracked.
