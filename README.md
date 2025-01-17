<p align="center">
    <img src="https://www.damasco.ai/assets/images/firefly-create-a-2d-illustration-of-a-simple-apricot-with-no-face-or-features.-the-apricot-should-h-2-removebg-preview-124x124.webp" align="center" width="30%">
</p>
<p align="center"><h1 align="center">Challenge DApp - Damasco</h1></p>
<p align="center">
	<em>ChallengeDApp - Decentralizing Challenges, One Code at a Time!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/damasco-ai/ChallengeDApp?style=default&logo=opensourceinitiative&logoColor=white&color=df703e" alt="license">
	<img src="https://img.shields.io/github/last-commit/damasco-ai/ChallengeDApp?style=default&logo=git&logoColor=white&color=df703e" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/damasco-ai/ChallengeDApp?style=default&color=df703e" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/damasco-ai/ChallengeDApp?style=default&color=df703e" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>



## 🔗 Table of Contents

- [📍 Overview](#-overview)
- [👾 Features](#-features)
- [📁 Project Structure](#-project-structure)
  - [📂 Project Index](#-project-index)
- [🚀 Getting Started](#-getting-started)
  - [☑️ Prerequisites](#-prerequisites)
  - [⚙️ Installation](#-installation)
  - [🤖 Usage](#🤖-usage)
- [🔰 Contributing](#-contributing)
- [🎗 License](#-license)
- [🙌 Acknowledgments](#-acknowledgments)

---

## 📍 Overview

ChallengeDApp is a decentralized application designed to solve the problem of inconsistency and integrity in project dependencies across different environments. It features a robust configuration system, ensuring seamless operation and customization. Key benefits include automatic generation of dependency trees and version control. This DApp is ideal for developers seeking reliable, conflict-free coding environments.

---

## 👾 Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>The project is a Decentralized Application (DApp).</li><li>It is built using JavaScript and TypeScript.</li><li>It uses a component-based architecture.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>The codebase is primarily written in TypeScript, ensuring type safety and reducing runtime errors.</li><li>ESLint is used for maintaining code quality and consistency.</li><li>The project uses modern JavaScript features and syntax, indicating a high level of code quality.</li></ul> |
| 📄 | **Documentation** | <ul><li>The primary language used in the project is TypeScript.</li><li>The project uses npm as its package manager.</li><li>Installation, usage, and test commands are well-documented.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>The project integrates with the Solana blockchain through the @solana/web3.js and @solana/spl-token packages.</li><li>It uses Socket.IO for real-time, bidirectional and event-based communication.</li><li>It also integrates with various UI libraries like @radix-ui/react-avatar, @radix-ui/react-hover-card, and react-icons.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>The project is structured into multiple components, indicating a high level of modularity.</li><li>It uses the @reduxjs/toolkit for efficient state management across components.</li><li>It also uses the @tanstack/react-query for fetching, caching, and updating asynchronous data in React.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>The project uses efficient libraries like @reduxjs/toolkit and @tanstack/react-query for state management and data fetching, which can enhance performance.</li><li>It uses TypeScript, which can lead to more efficient code due to its static typing feature.</li><li>More specific performance metrics would require a deeper analysis of the codebase.</li></ul> |
| 🛡️ | **Security**      | <ul><li>The project uses npm for managing packages, which includes security audits of dependencies.</li><li>It uses TypeScript, which can improve security by identifying potential errors at compile time.</li><li>More specific security measures would require a deeper analysis of the codebase.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>The project has a wide range of dependencies including npm, TypeScript, ESLint, Redux Toolkit, React Query, and various UI libraries.</li><li>It uses package-lock.json to lock down the versions of package dependencies.</li><li>It also uses tsconfig.json for configuring TypeScript compiler options.</li></ul> |

---

## 📁 Project Structure

```sh
└── ChallengeDApp/
    ├── @types
    │   └── env.d.ts
    ├── INSTRUCTIONS.md
    ├── LICENSE
    ├── README.md
    ├── app
    │   ├── (dapp)
    │   ├── favicon.ico
    │   ├── globals.css
    │   ├── layout.tsx
    │   └── providers.tsx
    ├── components
    │   ├── shared
    │   └── ui
    ├── components.json
    ├── configs
    │   ├── env.ts
    │   ├── privy.ts
    │   └── query_client.ts
    ├── eslint.config.mjs
    ├── hooks
    │   ├── use-dexscreener.tsx
    │   ├── use-jup.tsx
    │   ├── use-socket.tsx
    │   ├── use-solana-balance.tsx
    │   ├── use-solana-price.tsx
    │   ├── use-token-balance.tsx
    │   └── use-wallet-balance.tsx
    ├── lib
    │   ├── blockchain.ts
    │   ├── number.ts
    │   ├── strings.ts
    │   └── utils.ts
    ├── next-env.d.ts
    ├── next.config.ts
    ├── package-lock.json
    ├── package.json
    ├── postcss.config.mjs
    ├── public
    │   ├── icons
    │   └── logo.png
    ├── store
    │   ├── api.ts
    │   ├── base-query.ts
    │   ├── enums.ts
    │   ├── index.ts
    │   ├── reducer.ts
    │   ├── reducers
    │   └── storage.ts
    ├── tailwind.config.ts
    └── tsconfig.json
```


### 📂 Project Index
<details open>
	<summary><b><code>CHALLENGEDAPP/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/package-lock.json'>package-lock.json</a></b></td>
				<td>- The `package-lock.json` file is a crucial part of the "damasco-dapp" project, which is a decentralized application (DApp)<br>- This file is automatically generated and is responsible for describing the exact tree that was generated when the project dependencies were installed<br>- It ensures that subsequent installs are able to generate identical trees, regardless of intermediate dependency updates<br>- In the context of the entire codebase architecture, this file plays a pivotal role in maintaining the consistency and integrity of the project's dependencies across different environments<br>- It lists all the dependencies of the project, including "@jup-ag/api", "@next/third-parties", "@privy-io/react-auth", "@radix-ui/react-avatar", and "@radix-ui/react-dialog", among others, along with their specific versions<br>- This file is essential for the smooth operation of the "damasco-dapp" project, ensuring that all developers working on the project use the same dependencies, thus avoiding potential conflicts and discrepancies that could arise from using different versions of the same package.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/next.config.ts'>next.config.ts</a></b></td>
				<td>- Next.config.ts serves as a configuration hub for the Next.js application<br>- It defines and exports a configuration object, which can be customized to alter the default behavior of the Next.js framework<br>- This file is integral to the project's structure, influencing the overall functionality and behavior of the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/tsconfig.json'>tsconfig.json</a></b></td>
				<td>- The tsconfig.json file serves as a configuration guide for the TypeScript compiler in the project<br>- It specifies the compiler options such as the JavaScript version to compile down to, libraries to include, and modules to resolve<br>- It also defines the files to include and exclude during the compilation process.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/eslint.config.mjs'>eslint.config.mjs</a></b></td>
				<td>- Eslint.config.mjs configures ESLint for the project, ensuring adherence to coding standards and best practices<br>- It extends configurations for core web vitals and TypeScript from the Next.js framework<br>- This setup aids in maintaining code quality and consistency across the project, while also optimizing for performance and user experience.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/next-env.d.ts'>next-env.d.ts</a></b></td>
				<td>- Next-env.d.ts serves as a TypeScript declaration file within the Next.js framework, providing type definitions for Next.js and Next.js image types<br>- It's crucial for TypeScript's type checking and editor autocompletion<br>- As per Next.js guidelines, it should remain unedited to ensure consistent TypeScript configuration across the project.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/postcss.config.mjs'>postcss.config.mjs</a></b></td>
				<td>- Postcss.config.mjs configures the PostCSS processor, primarily enabling the Tailwind CSS framework<br>- This configuration is crucial for the project's styling, as it allows the use of utility-first CSS classes, enhancing the efficiency and maintainability of the codebase's visual design.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/package.json'>package.json</a></b></td>
				<td>- The package.json file serves as the blueprint for the "damasco-dapp" project<br>- It outlines the necessary dependencies, scripts for running, building, and testing the application, and specifies the project's version and license<br>- This file is crucial for setting up the development environment and managing the project's dependencies.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components.json'>components.json</a></b></td>
				<td>- Components.json serves as a configuration file for the project's user interface<br>- It defines the style, resource settings, TypeScript usage, Tailwind CSS configuration, and directory aliases<br>- Additionally, it specifies the icon library used across the project<br>- This file plays a crucial role in maintaining consistency and efficiency in the project's UI development.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/tailwind.config.ts'>tailwind.config.ts</a></b></td>
				<td>- Tailwind.config.ts serves as the configuration file for Tailwind CSS in the project<br>- It defines the dark mode, content paths, theme extensions including colors, border radius, and font family<br>- It also incorporates the Tailwind CSS animate plugin<br>- This configuration influences the overall styling and appearance of the project's user interface.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- configs Submodule -->
		<summary><b>configs</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/configs/env.ts'>env.ts</a></b></td>
				<td>- The 'env.ts' file in the 'configs' directory serves as a validation utility for environment variables<br>- It provides various validators to ensure the correctness of data types and values, and also offers a function to clean and validate all environment variables<br>- This contributes to the robustness and reliability of the entire codebase.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/configs/privy.ts'>privy.ts</a></b></td>
				<td>- The 'privy.ts' configuration file sets up the Privy client for the project, defining visual settings, embedded wallet options, and external wallet configurations, particularly for Solana<br>- It also enables auto-connection to supported Solana wallets, enhancing user experience and interaction with blockchain technology.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/configs/query_client.ts'>query_client.ts</a></b></td>
				<td>- The 'query_client.ts' configures the default behavior of React Query in the application, including caching, refetching, and retry policies<br>- It also exports a QueryClient instance with these default settings<br>- This configuration impacts how data is fetched, cached, and refreshed across the entire application.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- lib Submodule -->
		<summary><b>lib</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/lib/blockchain.ts'>blockchain.ts</a></b></td>
				<td>- The 'blockchain.ts' module in the 'lib' directory establishes an RPC connection to the Solana blockchain, extracts transaction signatures, and manages the sending and confirmation of serialized transactions<br>- It also includes utility functions for waiting and retrying transactions, enhancing the robustness of the network interactions.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/lib/number.ts'>number.ts</a></b></td>
				<td>- The lib/number.ts module in the project architecture provides two key functionalities<br>- It formats large numbers into a more readable format using abbreviations for thousands and millions<br>- Additionally, it converts amounts from Solana's native token, SOL, to lamports, aiding in cryptocurrency transactions.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/lib/utils.ts'>utils.ts</a></b></td>
				<td>- The utility function in lib/utils.ts merges multiple class names and resolves Tailwind CSS conflicts<br>- It dynamically applies Tailwind classes, avoiding duplication or conflicts<br>- This function is particularly useful for handling conditional classes and resolving Tailwind conflicts, ensuring a single string output of merged and resolved class names.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/lib/strings.ts'>strings.ts</a></b></td>
				<td>- The lib/strings.ts module enhances readability of blockchain addresses in the user interface<br>- It exports a function, formatAddress, which truncates a given address, displaying only the first and last four characters<br>- This contributes to a cleaner, more user-friendly display of complex blockchain data.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- components Submodule -->
		<summary><b>components</b></summary>
		<blockquote>
			<details>
				<summary><b>shared</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/footer.tsx'>footer.tsx</a></b></td>
						<td>- Footer.tsx serves as the footer component of the application, providing a consistent bottom section across all pages<br>- It contains copyright information and has the potential to include links to various social media platforms<br>- Positioned within the shared components directory, it contributes to the modular structure of the codebase.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/matrix-background.tsx'>matrix-background.tsx</a></b></td>
						<td>- MatrixEffect, located in the components/shared directory, generates a dynamic matrix-style background animation<br>- It creates an array of random characters and numbers, which are then animated to move vertically down the screen, mimicking the iconic digital rain effect seen in the Matrix franchise<br>- This component enhances the visual appeal of the user interface.</td>
					</tr>
					</table>
					<details>
						<summary><b>header</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/header/dex-marquee.tsx'>dex-marquee.tsx</a></b></td>
								<td>- DEXMarquee, located in the shared header components, is a React component that displays a scrolling marquee<br>- It fetches and presents real-time data about the Solana (SOL) and MASCO token prices, liquidity, fair decentralized value (FDV), and market capitalization<br>- This component enhances user experience by providing quick access to key financial metrics.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/header/index.tsx'>index.tsx</a></b></td>
								<td>- The Header component in the shared directory serves as the topmost section of the user interface, displaying the Damasco AI logo and a Connector component<br>- It also includes a DEXMarquee component beneath it<br>- This component is crucial for branding and navigation within the Damasco AI application.</td>
							</tr>
							</table>
							<details>
								<summary><b>connector</b></summary>
								<blockquote>
									<table>
									<tr>
										<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/header/connector/index.tsx'>index.tsx</a></b></td>
										<td>- Connector, located in the shared header components, manages user authentication and wallet connection status<br>- It utilizes Privy and Solana Wallets to determine the user's state<br>- If a user is authenticated and ready, it displays the LoggedConnector component<br>- Otherwise, it defaults to the GuestConnector, indicating the user is either unauthenticated or has no connected wallets.</td>
									</tr>
									</table>
									<details>
										<summary><b>_components</b></summary>
										<blockquote>
											<table>
											<tr>
												<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/header/connector/_components/logged.tsx'>logged.tsx</a></b></td>
												<td>- LoggedConnector, located in the shared header connector components, manages the display and functionality of a logged-in user's wallet information<br>- It fetches and formats wallet details, including address and balances, and provides a logout feature<br>- This component contributes to the user interface and interaction within the broader codebase.</td>
											</tr>
											<tr>
												<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/shared/header/connector/_components/guest.tsx'>guest.tsx</a></b></td>
												<td>- GuestConnector, located in the shared header connector components, facilitates user interaction with the wallet connection feature<br>- It leverages Privy's authentication hooks to manage login states and renders a button that triggers the wallet connection process<br>- The component's readiness state determines the button's availability, enhancing user experience.</td>
											</tr>
											</table>
										</blockquote>
									</details>
								</blockquote>
							</details>
						</blockquote>
					</details>
				</blockquote>
			</details>
			<details>
				<summary><b>ui</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/scroll-area.tsx'>scroll-area.tsx</a></b></td>
						<td>- ScrollArea and ScrollBar components, located in the components/ui/scroll-area.tsx file, enhance the user interface by providing customizable scrolling features<br>- They utilize the ScrollAreaPrimitive from the Radix UI library, offering a flexible, responsive scrolling experience<br>- These components contribute to the overall interactivity and accessibility of the project's user interface.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/input.tsx'>input.tsx</a></b></td>
						<td>- The Input component, located in the components/ui directory, is a reusable UI element in the codebase<br>- It provides a customizable input field with predefined styles and behaviors, enhancing user interaction across the application<br>- The component's flexibility allows it to be integrated seamlessly into various parts of the project.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/button.tsx'>button.tsx</a></b></td>
						<td>- Button, located in the components/ui directory, is a reusable component that provides a variety of button styles for the application<br>- It leverages the class-variance-authority library to manage different button variants and sizes<br>- The component also supports the forwarding of refs and the ability to be rendered as a child component.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/dialog.tsx'>dialog.tsx</a></b></td>
						<td>- The 'dialog.tsx' component in the UI directory provides a customizable dialog box functionality for the application<br>- It leverages the Radix UI library to create a dialog box with various elements such as a trigger, portal, overlay, close button, content, header, footer, title, and description<br>- These elements can be used across the application to display interactive dialog boxes to the user.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/avatar.tsx'>avatar.tsx</a></b></td>
						<td>- The Avatar component, located in the UI directory, provides a customizable user avatar feature<br>- It leverages the Radix UI library to create a flexible avatar component with an image and fallback option<br>- This component enhances the user interface by allowing personalized user representation across the application.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/hover-card.tsx'>hover-card.tsx</a></b></td>
						<td>- HoverCard, a component within the UI directory, provides an interactive card feature that appears when a user hovers over a specific element<br>- It utilizes the Radix UI library to create a customizable, animated card with adjustable alignment and offset<br>- This component enhances user experience by offering additional context or actions in a visually appealing manner.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/sonner.tsx'>sonner.tsx</a></b></td>
						<td>- Toaster, located in the components/ui directory, is a reusable UI component that leverages the Sonner library to display notifications in the application<br>- It uses the theme from the next-themes package to ensure consistent styling across the application<br>- This component enhances user experience by providing feedback or alerts in a visually consistent manner.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/components/ui/card.tsx'>card.tsx</a></b></td>
						<td>- The 'card.tsx' component in the UI directory provides a set of reusable card elements for the application<br>- It includes the main Card component and subcomponents like CardHeader, CardFooter, CardTitle, CardDescription, and CardContent<br>- These components are designed to structure and style content in a card format across the application.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- hooks Submodule -->
		<summary><b>hooks</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-solana-balance.tsx'>use-solana-balance.tsx</a></b></td>
				<td>- The 'useSolanaBalance' hook fetches and manages the Solana balance of a user's wallet<br>- It provides the balance, loading state, error state, and a function to refetch the balance<br>- The balance is fetched from a given wallet address and returned in SOL, Solana's native cryptocurrency.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-token-balance.tsx'>use-token-balance.tsx</a></b></td>
				<td>- The 'useTokenBalance' hook in the 'use-token-balance.tsx' file fetches and manages the token balance of a user's wallet in the Solana blockchain<br>- It provides the balance in a human-readable format, loading state, error state, and a function to manually refetch the token balance.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-jup.tsx'>use-jup.tsx</a></b></td>
				<td>- The 'useJupiter' hook facilitates interaction with the Jupiter API for token swaps on Solana<br>- It provides functionality to fetch quotes and execute swaps, while managing loading and error states<br>- This hook is integral to the application's ability to perform token transactions.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-wallet-balance.tsx'>use-wallet-balance.tsx</a></b></td>
				<td>- The 'use-wallet-balance.tsx' file in the project is a custom React hook that fetches and manages the total USD balance of a Solana wallet<br>- It calculates the balance by summing the value of all tokens and SOL owned by the wallet, and provides a function to manually refetch the balance data.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-socket.tsx'>use-socket.tsx</a></b></td>
				<td>- The useSocket custom hook in the hooks/use-socket.tsx file manages WebSocket connections using the socket.io-client<br>- It handles connection state, messages, and server interactions, including sending messages and receiving replies<br>- It also integrates with the Privy authentication context and refetches user stats upon receiving a message.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-dexscreener.tsx'>use-dexscreener.tsx</a></b></td>
				<td>- The 'use-dexscreener.tsx' file fetches and parses trading pair data from the DexScreener API<br>- It provides liquidity, market capitalization, price in USD and Solana's native token, and fully diluted valuation for a specific trading pair<br>- The data is updated every 15 seconds, ensuring real-time accuracy.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/hooks/use-solana-price.tsx'>use-solana-price.tsx</a></b></td>
				<td>- The 'useSolPrice' function in the 'use-solana-price.tsx' file fetches and manages the current price of SOL (Solana token) from the Jupiter API<br>- It provides the SOL price, loading state, error state, and a refetch function, ensuring continuous updates every 30 seconds.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- store Submodule -->
		<summary><b>store</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/enums.ts'>enums.ts</a></b></td>
				<td>- CacheTags, an enumeration in the API service, manages cache invalidation and updates in Redux Toolkit Query<br>- Specifically, it handles data related to user statistics, enabling efficient data refetching or invalidation when necessary<br>- This component plays a crucial role in maintaining data consistency and performance in the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/base-query.ts'>base-query.ts</a></b></td>
				<td>- CustomBaseQuery in store/base-query.ts handles API requests with an Authorization header, including a Bearer token obtained from the authentication provider<br>- It prepares headers for the API request and sets the access token in the Authorization header if available<br>- BaseQuery uses this custom query for API calls, compatible with Redux Toolkit Query's BaseQueryFn.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/storage.ts'>storage.ts</a></b></td>
				<td>- The 'store/storage.ts' module in the project provides a cookie-based storage utility<br>- It leverages the 'cookies-next' library to manage cookies, offering methods to get, set, and remove items<br>- This utility enhances data persistence and retrieval across the entire site, ensuring compatibility and accessibility via JavaScript.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/index.ts'>index.ts</a></b></td>
				<td>- The store/index.ts file establishes and configures the Redux store for the application, incorporating reducers and middleware for the API service<br>- It also defines types for the application store, dispatch function, and root state, and provides custom hooks to access the dispatch function and state of the application store.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/reducer.ts'>reducer.ts</a></b></td>
				<td>- The 'store/reducer.ts' serves as the root reducer for the Redux store, combining all slice reducers, including the API service reducer<br>- It manages caching, queries, and mutations from the API service, contributing to the overall state management in the project's architecture.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/api.ts'>api.ts</a></b></td>
				<td>- The 'store/api.ts' establishes the API service configuration using Redux Toolkit Query, defining the base query and setting up caching tags for improved state management<br>- It manages the API's state in the Redux store, handles authentication and base URL setup, and maintains state consistency across components<br>- Currently, it does not define any endpoints.</td>
			</tr>
			</table>
			<details>
				<summary><b>reducers</b></summary>
				<blockquote>
					<details>
						<summary><b>live</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/reducers/live/live.api.ts'>live.api.ts</a></b></td>
								<td>- The 'live.api.ts' in the 'store/reducers/live' directory extends the base API configuration to include endpoints for fetching live hack data and top scores<br>- It defines the 'liveHack' and 'topScore' queries, and exports hooks for data fetching<br>- This contributes to the overall project by providing real-time data and score information.</td>
							</tr>
							</table>
						</blockquote>
					</details>
					<details>
						<summary><b>user</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/store/reducers/user/user.api.ts'>user.api.ts</a></b></td>
								<td>- User API service extends the base API configuration by adding user-related endpoints<br>- It includes an endpoint for fetching user statistics, with cache invalidation managed through specific tags<br>- The service also provides a hook to fetch user statistics using the defined query<br>- The service can override existing endpoints, allowing for extension or modification of existing API services.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- @types Submodule -->
		<summary><b>@types</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/@types/env.d.ts'>env.d.ts</a></b></td>
				<td>- The '@types/env.d.ts' file defines the type for environment variables used throughout the project, including general, privy settings, token addresses, URLs, and Google Tag Manager variables<br>- It also extends these definitions to the global namespace, ensuring consistent usage across the codebase.</td>
			</tr>
			</table>
		</blockquote>
	</details>
	<details> <!-- app Submodule -->
		<summary><b>app</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/layout.tsx'>layout.tsx</a></b></td>
				<td>- RootLayout serves as the primary layout structure for the application, integrating key components such as the Header, Footer, and MatrixEffect<br>- It also manages font styles and Google Tag Manager integration<br>- The layout wraps around the main content, represented by the 'children' prop, ensuring a consistent look and feel across the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/globals.css'>globals.css</a></b></td>
				<td>- The 'globals.css' file in the 'app' directory defines the global styles and color variables for the entire application<br>- It leverages Tailwind CSS for base, components, and utility styles, and sets up custom CSS variables for colors, borders, and fonts<br>- This ensures a consistent look and feel across the application.</td>
			</tr>
			<tr>
				<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/providers.tsx'>providers.tsx</a></b></td>
				<td>- Providers serves as a global wrapper for the application, integrating multiple providers such as Redux for global state management, React Query for query state and caching, and Privy for user authentication and secure access management<br>- It ensures the Redux store is created once and persists throughout the app's lifecycle, and sets up listeners for automatic refetching of queries.</td>
			</tr>
			</table>
			<details>
				<summary><b>(dapp)</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/page.tsx'>page.tsx</a></b></td>
						<td>- Page.tsx serves as a central layout component in the decentralized application, orchestrating the display of various sub-components such as Stats, TopHolders, LiveHack, Instructions, ChatView, and Swap<br>- It also sets the document's metadata, including the title and description, from environment variables.</td>
					</tr>
					</table>
					<details>
						<summary><b>_components</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/stats-card.tsx'>stats-card.tsx</a></b></td>
								<td>- StatsCard, located in the components directory of the decentralized application (dapp), is a reusable React component<br>- It displays statistical data in a card format, with an optional formatting feature<br>- The component accepts a label, value, and an icon, enhancing the flexibility and reusability across the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/chat-view.tsx'>chat-view.tsx</a></b></td>
								<td>- ChatView, located in the components directory of the decentralized application (dapp), provides the user interface for a chat feature<br>- It utilizes React hooks and custom hooks for socket communication and user authentication<br>- The component handles message sending, displays chat messages, and manages user input, ensuring only authenticated users can send messages.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/instructions.tsx'>instructions.tsx</a></b></td>
								<td>- The Instructions component in the decentralized application (dapp) provides an interactive user interface for the Damasco Challenge #3<br>- It outlines the game rules, objectives, and rewards, enhancing user engagement and understanding<br>- This component significantly contributes to the user experience and interaction within the application.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/swap.tsx'>swap.tsx</a></b></td>
								<td>- Swap.tsx is a component in the decentralized application that enables users to swap Solana (SOL) tokens for $MASCO tokens<br>- It provides a user interface for inputting the amount of SOL to swap, previewing the swap, and executing the swap<br>- It also handles transaction signing and error handling, and displays the transaction status and potential rewards.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/live-hack.tsx'>live-hack.tsx</a></b></td>
								<td>- LiveHack, a component within the decentralized application (dapp), displays real-time hacking attempts<br>- It fetches and presents broadcast messages, including the sender's address, content, and timestamp<br>- The content is partially masked for security<br>- The component also features a refreshing mechanism to keep the data up-to-date.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/top-holders.tsx'>top-holders.tsx</a></b></td>
								<td>- TopHolders is a component within the decentralized application (dApp) that displays the top 10 hackers based on their scores<br>- It queries for the top scores, formats and displays the data, and provides an option to show more or less data<br>- This component contributes to the overall user interface and user experience of the dApp.</td>
							</tr>
							<tr>
								<td><b><a href='https://github.com/damasco-ai/ChallengeDApp/blob/master/app/(dapp)/_components/stats.tsx'>stats.tsx</a></b></td>
								<td>- Stats, a component in the decentralized application (dapp), displays user statistics in a grid format<br>- It fetches user data such as score, attempts, and tokens earned, and presents them in individual StatsCards<br>- The component also integrates with Privy for authentication and only fetches data for authenticated users.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

---
## 🚀 Getting Started

### ☑️ Prerequisites

Before getting started with ChallengeDApp, ensure your runtime environment meets the following requirements:

- **Programming Language:** TypeScript
- **Package Manager:** Npm


### ⚙️ Installation

Install ChallengeDApp using one of the following methods:

**Build from source:**

1. Clone the ChallengeDApp repository:
```sh
❯ git clone https://github.com/damasco-ai/ChallengeDApp
```

2. Navigate to the project directory:
```sh
❯ cd ChallengeDApp
```

3. Install the project dependencies:


**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm install
```




### 🤖 Usage
Run ChallengeDApp using the following command:
**Using `npm`** &nbsp; [<img align="center" src="https://img.shields.io/badge/npm-CB3837.svg?style={badge_style}&logo=npm&logoColor=white" />](https://www.npmjs.com/)

```sh
❯ npm dev
```

---

## 🔰 Contributing

- **💬 [Join the Discussions](https://github.com/damasco-ai/ChallengeDApp/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/damasco-ai/ChallengeDApp/issues)**: Submit bugs found or log feature requests for the `ChallengeDApp` project.
- **💡 [Submit Pull Requests](https://github.com/damasco-ai/ChallengeDApp/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/damasco-ai/ChallengeDApp
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/damasco-ai/ChallengeDApp/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=damasco-ai/ChallengeDApp">
   </a>
</p>
</details>

---

## 🎗 License

This project is protected under the [MIT LICENSE](https://mit-license.org/) License. For more details, refer to the license file.

---

## 🙌 Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
