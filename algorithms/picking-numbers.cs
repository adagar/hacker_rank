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

    // Complete the pickingNumbers function below.
    static int pickingNumbers(int[] a) {
        var max = 0;
        foreach(var leadNum in a)
        {
            var upCount = 0;
            var downCount = 0;
            foreach(var subNum in a)
            {
                if(leadNum - subNum <= 1 && leadNum - subNum >= 0)
                {
                    upCount++;
                }
                else if(subNum - leadNum <= 1 && subNum - leadNum >= 0)
                {
                    downCount++;
                }
            }
            if(downCount > max)
            {
                max = downCount;
            }
            else if(upCount > max)
            {
                max = upCount;
            }
        }

        return max;
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        int[] a = Array.ConvertAll(Console.ReadLine().Split(' '), aTemp => Convert.ToInt32(aTemp))
        ;
        int result = pickingNumbers(a);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
