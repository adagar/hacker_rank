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

    // Complete the solve function below.
    static int solve(int n, int[] s, int d, int m) {
        int count = 0;
        for(int i = 0; i <= n - 1; i++)
        {
            Console.WriteLine("Checking loop: " + i);
            int sum = 0;
            if(i + m <= n)
            {
                for(int j = i; j < i + m; j++)
                {
                    sum += s[j];
                }
                if(sum == d)
                {
                    count++;
                }
            }
        }
        return count;

    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int[] s = Array.ConvertAll(Console.ReadLine().Split(' '), sTemp => Convert.ToInt32(sTemp))
        ;
        string[] dm = Console.ReadLine().Split(' ');

        int d = Convert.ToInt32(dm[0]);

        int m = Convert.ToInt32(dm[1]);

        int result = solve(n, s, d, m);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
