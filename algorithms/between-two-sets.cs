using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;

class Solution {

    /*
     * Complete the getTotalX function below.
     */
    static int getTotalX(int[] a, int[] b) {
        int aMax = a.Max();
        int bMin = b.Min();
        int count = 0;
        for (int i = aMax; i <= bMin; i+= aMax)
        {
            //check if a numbers are all factor
            if(isAFactor(a, i) && isBFactor(b,i))
            {
                count++;
            }            
        }
        return count;
    }
    
    static bool isAFactor(int[]a, int num)
    {
        foreach(int aNum in a)
        {
            if(num % aNum != 0)
            {
                return false;
            }
        }
        return true;
    }
    static bool isBFactor(int[]b, int num)
    {
        foreach(int bNum in b)
            {
                if(bNum % num != 0)
                {
                    return false;
                }
            }
        return true;
    }
    static void Main(string[] args) {
        TextWriter tw = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] nm = Console.ReadLine().Split(' ');

        int n = Convert.ToInt32(nm[0]);

        int m = Convert.ToInt32(nm[1]);

        int[] a = Array.ConvertAll(Console.ReadLine().Split(' '), aTemp => Convert.ToInt32(aTemp))
        ;

        int[] b = Array.ConvertAll(Console.ReadLine().Split(' '), bTemp => Convert.ToInt32(bTemp))
        ;
        int total = getTotalX(a, b);

        tw.WriteLine(total);

        tw.Flush();
        tw.Close();
    }
}
