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

    // Complete the viralAdvertising function below.
    static int viralAdvertising(int n) {
        int sum = 0;
        int start = 5;
        int likes = (int)((start / 2));
        sum += likes;
        for(var i = 1; i < n; i++)
        {
            Console.WriteLine(sum);
            int shared = likes * 3;
            likes = (int)(shared / 2);
            
            sum += likes;
        }
        return sum;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int result = viralAdvertising(n);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
