# Waridi
Waridi is a floral shop website built with Next.js and Tailwind CSS.

## MVP

Users can browse through 3 product categories:
 [flowers](https://waridi.vercel.app/flowers)
 [plants](https://waridi.vercel.app/plants)
 [gifts](https://waridi.vercel.app/gifts)

Select the item they like and add it to their cart or wishlist.
After adding to cart, the user can also increase the quantity for the particular item.
A user can also remove an item from their cart or wishlist or they can clear their cart/wishlist entirely.
The cart does reset on refresh as the project doesn't use any database at the moment.

## Future Implementation
Use a database to persist the cart data.
Users can create account to enable a checkout process where the users delivery information and payment methods can be stored.
Implement  a payment system.


# For Developers
## Getting Started

Clone the repository and install the dependencies.

```bash
git clone git@github.com:Annastacia-dev/waridi.git
cd waridi
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
