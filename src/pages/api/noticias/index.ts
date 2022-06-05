import { NextApiRequest, NextApiResponse } from "next";

// eslint-disable-next-line import/no-anonymous-default-export
export default async ( req: NextApiRequest, res: NextApiResponse ) => {

  try {
    const resp = await fetch('http://localhost:1337/api/noticias');
    const json = await resp.json();
  
    res.status(200).json({
      list: json
    });
  } 
  catch (error) {
    res.status(500).json(error);
  }

}