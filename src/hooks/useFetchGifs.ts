import React from "react";
import getGifs from "../helpers/getGifs";
import {Gif} from "../components/GifGrid"
interface states {
  data: Gif[];
  loading: boolean;
}
 const useFetchGifs = (categorie:string) => {
  const [state, setState] = React.useState<states>({
    data: [],
    loading: true,
  });
  React.useEffect(() => {
    getGifs(categorie).then((imgs) => setState({
        data: imgs,
        loading: false,
      }));
  }, [categorie]);
  return state;
};

export default  useFetchGifs;
