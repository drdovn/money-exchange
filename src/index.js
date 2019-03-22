// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
  let h=50, q=25, d=10, n=5, p=1;
  let H,Q,D,N,P;
  function hh(currency)       {return (currency-(currency%h))/h;}
  function qq(currency)       {return (currency-(currency%q))/q;}
  function dd(currency)       {return (currency-(currency%d))/d;}
  function nn(currency)       {return (currency-(currency%n))/n;}
  function pp(currency)       {return (currency-H*h-Q*q-D*d-N*n)}

    if((currency>0)&&(currency<10000)){
      H=hh(currency); Q=qq(currency-H*h); D=dd(currency-H*h-Q*q); N=nn(currency-H*h-Q*q-D*d); P=pp(currency);
      arr={H:H,Q:Q,D:D,N:N,P:P}
      for(var key in arr){
        if(arr[key]==0){
          delete arr[key];
        }
      }
    }else if(currency<=0){
      arr={};
    }else {arr={error: "You are rich, my friend! We don't have so much coins for exchange"};}
  return (arr);

}
