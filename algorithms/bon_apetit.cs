using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace Solution {
class Solution {
    static void Main(string[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT */
        string meta = Console.ReadLine();
        List<int> metaList = new List<int>( Array.ConvertAll(meta.Split(' '), int.Parse) );
        string orders = Console.ReadLine();
        List<int> orderList = new List<int>( Array.ConvertAll(orders.Split(' '), int.Parse) );
        int paid =Convert.ToInt32(Console.ReadLine());
        // Console.WriteLine(meta + " " + orders + " " + paid);
        int totalSum = 0;
        for(int i = 0; i < orderList.Count; i++)
        {
            if(i != metaList[1])
            {
                totalSum += orderList[i];
            }
        }
        if(paid == totalSum / 2)
        {
            Console.WriteLine("Bon Appetit");
        }
        else
        {
            Console.WriteLine(paid - (totalSum/2));    
        }
        
    }
}
}