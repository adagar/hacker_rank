using System.CodeDom.Compiler;
using System.Collections.Generic;
using System.Collections;
using System.ComponentModel;
using System.Diagnostics.CodeAnalysis;
using System.Globalization;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Runtime.Serialization;
using System.Text.RegularExpressions;
using System.Text;
using System;

class Solution {

    // Complete the workbook function below.
    static int workbook(int n, int k, int[] arr) {
        //n - number of chapters
        //k - number of probs each page can hold
        int currentPage = 1;
        int specialProbs = 0;
        foreach(var chapter in arr)
        {
            int probCounter = 1;
            for(var i = 1; i <= chapter; i++)
            {                
                if(probCounter > k)
                {
                    probCounter = 1;
                    currentPage++;
                }
                if(i == currentPage)
                {
                    Console.WriteLine("Special page! Problem #" + i + " Page #" + currentPage);
                    specialProbs++;
                }
                Console.WriteLine("Problem #" + i + " Page #" + currentPage);
            }
            probCounter++;
            currentPage++;
        }
        return specialProbs;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] nk = Console.ReadLine().Split(' ');

        int n = Convert.ToInt32(nk[0]);

        int k = Convert.ToInt32(nk[1]);

        int[] arr = Array.ConvertAll(Console.ReadLine().Split(' '), arrTemp => Convert.ToInt32(arrTemp))
        ;
        int result = workbook(n, k, arr);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
