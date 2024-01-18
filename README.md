<div align="center">
  <br />
    <a href="https://carhub-dev.vercel.app" target="_blank">
      <img src="https://i.ibb.co/GpNzb6B/realestate.png" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_JS-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
  </div>

  <h3 align="center">Real Estate Website</h3>

   <div align="center">
     Build this project step by step with our detailed.
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)

## 🚨 Tutorial

This repository contains the code that corresponds to building an app from scratch.

If you prefer to learn from the doc, this is the perfect resource for you. Follow along to learn how to create projects like these step by step in a beginner-friendly way!

## <a name="introduction">🤖 Introduction</a>

Developed with React.js and leveraging server-side rendering capabilities, the real estate website offers a variety of house types showcasing comprehensive information in a well-designed format with advanced filtering and pagination support for an enhanced user experience.

If you are just starting out and need help, or if you encounter any bugs, you can ask. This is a place where people help each other.

## <a name="tech-stack">⚙️ Tech Stack</a>

- React.js
- Next.js
- Chackra UI

## <a name="features">🔋 Features</a>

👉 **Home Page**: Realestate visually appealing display of properties fetched from a third-party API, providing a captivating introduction to the diverse range of property available.

👉 **Exploration and Filtering**: Explore a wide range of properties from around the world using a search and filtering system based on criteria such as property type, purpose, rooms, rental frequency and maximum space.

👉 **Transition to Server-Side Rendering**: A seamless transition from client-side rendering to server-side rendering, enhancing performance and providing a smoother browsing experience.

👉 **Pagination**: For easy navigation through a large dataset of property, allowing users to explore multiple pages effortlessly.

👉 **Metadata Optimization and SEO**: Optimize metadata for property listing, enhancing search engine optimization (SEO) and ensuring better visibility on search engine results pages.

👉 **React Types**: Utilize React to provide robust typing for enhanced code quality and better development

👉 **Responsive Website Design**: The website is designed to be visually pleasing and responsive, ensuring an optimal user experience across various devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/emredkyc/realestate.git
cd realestate
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NEXT_PUBLIC_RAPID_API_KEY=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the corresponding websites from [https://rapidapi.com/apidojo/api/bayut?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel].

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>_app.js</code></summary>

```javascript
import Router from 'next/router';
import Head from 'next/head';
import NProgress from 'nprogress';
import { ChakraProvider } from '@chakra-ui/react';

import Layout from '../components/Layout';

function MyApp({ Component, pageProps }) {
  NProgress.configure({ showSpinner: false });

  Router.events.on('routeChangeStart', () => {
    NProgress.start();
  });

  Router.events.on('routeChangeComplete', () => {
    NProgress.done();
  });

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css' integrity='sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ==' crossOrigin='anonymous' referrerPolicy='no-referrer' />
      </Head>
      <ChakraProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}

export default MyApp;
```
</details>

<details>
<summary><code>filterData.js</code></summary>

```javascript
export const filterData = [
  {
    items: [
      { name: 'Buy', value: 'for-sale' },
      { name: 'Rent', value: 'for-rent' },
    ],
    placeholder: 'Purpose',
    queryName: 'purpose',
  },
  {
    items: [
      { name: 'Daily', value: 'daily' },
      { name: 'Weekly', value: 'weekly' },
      { name: 'Monthly', value: 'monthly' },
      { name: 'Yearly', value: 'yearly' },
    ],
    placeholder: 'Rent Frequency',
    queryName: 'rentFrequency',
  },
  {
    items: [
      { name: '10,000', value: '10000' },
      { name: '20,000', value: '20000' },
      { name: '30,000', value: '30000' },
      { name: '40,000', value: '40000' },
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
    ],
    placeholder: 'Min Price(AED)',
    queryName: 'minPrice',
  },
  {
    items: [
      { name: '50,000', value: '50000' },
      { name: '60,000', value: '60000' },
      { name: '85,000', value: '85000' },
      { name: '110,000', value: '110000' },
      { name: '135,000', value: '135000' },
      { name: '160,000', value: '160000' },
      { name: '185,000', value: '185000' },
      { name: '200,000', value: '200000' },
      { name: '300,000', value: '300000' },
      { name: '400,000', value: '400000' },
      { name: '500,000', value: '500000' },
      { name: '600,000', value: '600000' },
      { name: '700,000', value: '700000' },
      { name: '800,000', value: '800000' },
      { name: '900,000', value: '900000' },
      { name: '1000,000', value: '1000000' },
    ],
    placeholder: 'Max Price(AED)',
    queryName: 'maxPrice',
  },
  {
    items: [
      { name: 'Lowest Price', value: 'price-asc' },
      { name: 'Highest Price', value: 'price-des' },
      { name: 'Newest', value: 'date-asc' },
      { name: 'Oldest', value: 'date-desc' },
      { name: 'Verified', value: 'verified-score' },
      { name: 'City Level Score', value: 'city-level-score' },
    ],
    placeholder: 'Sort',
    queryName: 'sort',
  },
  {
    items: [
      { name: '1000', value: '1000' },
      { name: '2000', value: '2000' },
      { name: '3000', value: '3000' },
      { name: '4000', value: '4000' },
      { name: '5000', value: '5000' },
      { name: '10000', value: '10000' },
      { name: '20000', value: '20000' },
    ],
    placeholder: 'Max Area(sqft)',
    queryName: 'areaMax',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Rooms',
    queryName: 'roomsMin',
  },
  {
    items: [
      { name: '1', value: '1' },
      { name: '2', value: '2' },
      { name: '3', value: '3' },
      { name: '4', value: '4' },
      { name: '5', value: '5' },
      { name: '6', value: '6' },
      { name: '7', value: '7' },
      { name: '8', value: '8' },
      { name: '9', value: '9' },
      { name: '10', value: '10' },
    ],
    placeholder: 'Baths',
    queryName: 'bathsMin',
  },
  {
    items: [
      { name: 'Furnished', value: 'furnished' },
      { name: 'Unfurnished', value: 'unfurnished' },
    ],
    placeholder: 'Furnish Type',
    queryName: 'furnishingStatus',
  },
  {
    items: [
      { name: 'Apartment', value: '4' },
      { name: 'Townhouses', value: '16' },
      { name: 'Villas', value: '3' },
      { name: 'Penthouses', value: '18' },
      { name: 'Hotel Apartments', value: '21' },
      { name: 'Villa Compound', value: '19' },
      { name: 'Residential Plot', value: '14' },
      { name: 'Residential Floor', value: '12' },
      { name: 'Residential Building', value: '17' },
    ],
    placeholder: 'Property Type',
    queryName: 'categoryExternalID',
  },
];

export const getFilterValues = (filterValues) => {
  const {
    purpose,
    rentFrequency,
    categoryExternalID,
    minPrice,
    maxPrice,
    areaMax,
    roomsMin,
    bathsMin,
    sort,
    locationExternalIDs,
  } = filterValues;

  const values = [
    {
      name: 'purpose',
      value: purpose,
    },
    {
      name: 'rentFrequency',
      value: rentFrequency,
    },
    {
      name: 'minPrice',
      value: minPrice,
    },
    {
      name: 'maxPrice',
      value: maxPrice,
    },
    {
      name: 'areaMax',
      value: areaMax,
    },
    {
      name: 'roomsMin',
      value: roomsMin,
    },
    {
      name: 'bathsMin',
      value: bathsMin,
    },
    {
      name: 'sort',
      value: sort,
    },
    {
      name: 'locationExternalIDs',
      value: locationExternalIDs,
    },
    {
      name: 'categoryExternalID',
      value: categoryExternalID,
    },
  ];

  return values;
};
```
</details>

<details>
<summary><code>getServerSidePropsSearch.js</code></summary>

```javascript
export async function getServerSideProps({ query }) {
  const purpose = query.purpose || 'for-rent';
  const rentFrequency = query.rentFrequency || 'yearly';
  const minPrice = query.minPrice || '0';
  const maxPrice = query.maxPrice || '1000000';
  const roomsMin = query.roomsMin || '0';
  const bathsMin = query.bathsMin || '0';
  const sort = query.sort || 'price-desc';
  const areaMax = query.areaMax || '35000';
  const locationExternalIDs = query.locationExternalIDs || '5002';
  const categoryExternalID = query.categoryExternalID || '4';

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
```
</details>

<details>
<summary><code>index-imageUrl.js</code></summary>

```javascript
https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4
```
</details>

<details>
<summary><code>SearchFilters.jsx</code></summary>

```javascript
import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';
import { baseUrl, fetchApi } from '../utils/fetchApi';
import noresult from '../assets/images/noresult.svg';

export default function SearchFilters() {
  const [filters] = useState(filterData);
  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const searchProperties = (filterValues) => {
    const path = router.pathname;
    const { query } = router;

    const values = getFilterValues(filterValues)

    values.forEach((item) => {
      if(item.value && filterValues?.[item.name]) {
        query[item.name] = item.value
      }
    })

    router.push({ pathname: path, query: query });
  };

  useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters?.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({ [filter.queryName]: e.target.value })} placeholder={filter.placeholder} w='fit-content' p='2' >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
      <Flex flexDir='column'>
        <Button onClick={() => setShowLocations(!showLocations)} border='1px' borderColor='gray.200' marginTop='2' >
          Search Location
        </Button>
        {showLocations && (
          <Flex flexDir='column' pos='relative' paddingTop='2'>
            <Input
              placeholder='Type Here'
              value={searchTerm}
              w='300px'
              focusBorderColor='gray.300'
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm !== '' && (
              <Icon
                as={MdCancel}
                pos='absolute'
                cursor='pointer'
                right='5'
                top='5'
                zIndex='100'
                onClick={() => setSearchTerm('')}
              />
            )}
            {loading && <Spinner margin='auto' marginTop='3' />}
            {showLocations && (
              <Box height='300px' overflow='auto'>
                {locationData?.map((location) => (
                  <Box
                    key={location.id}
                    onClick={() => {
                      searchProperties({ locationExternalIDs: location.externalID });
                      setShowLocations(false);
                      setSearchTerm(location.name);
                    }}
                  >
                    <Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
                      {location.name}
                    </Text>
                  </Box>
                ))}
                {!loading && !locationData?.length && (
                  <Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
                    <Image src={noresult} />
                    <Text fontSize='xl' marginTop='3'>
                      Waiting to search!
                    </Text>
                  </Flex>
                )}
              </Box>
            )}
          </Flex>
        )}
      </Flex>
    </Flex>
  );
}
```
</details>
