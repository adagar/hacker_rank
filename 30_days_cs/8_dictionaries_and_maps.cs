using System;
using System.Collections.Generic;
using System.IO;
class Solution {
    static void Main(String[] args) {
        var dictNum = Convert.ToInt32(Console.ReadLine());
        var phonebook = new Dictionary<string, string>();
        for(var i = 0; i < dictNum; i++)
        {
            string[] entry = Console.ReadLine().Split(' ');
            phonebook.Add(entry[0], entry[1]);
        }
        while(true)
        {
            string lookupKey = Console.ReadLine();
            if(phonebook.ContainsKey(lookupKey))
               {
                   Console.WriteLine("{0}={1}", lookupKey, phonebook[lookupKey]);
               }
            else
               {
                   Console.WriteLine("Not found");
                }
        }
    }
}