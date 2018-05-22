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

    // Complete the kangaroo function below.
    static string kangaroo(int x1, int v1, int x2, int v2) {
        int smaller = 0;
        int smallerJump = 0;
        int larger = 0;
        int largerJump = 0;
        
        if(x1 < x2)
        {
            smaller = x1;
            smallerJump = v1;
            larger = x2;     
            largerJump = v2;
        }
        else if(x1 == x2)
        {
            return "YES";    
        }
        else
        {
            smaller = x2;
            smallerJump = v2;
            larger = x1;
            largerJump = v1;
        }
        if(smallerJump <= largerJump)
        {
            return "NO";
        }
        while(smaller < larger)
        {
            smaller += smallerJump;
            larger += largerJump;
            
            if(smaller == larger)
            {
                return "YES";
            }
        }
        return "NO";
    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        string[] x1V1X2V2 = Console.ReadLine().Split(' ');

        int x1 = Convert.ToInt32(x1V1X2V2[0]);

        int v1 = Convert.ToInt32(x1V1X2V2[1]);

        int x2 = Convert.ToInt32(x1V1X2V2[2]);

        int v2 = Convert.ToInt32(x1V1X2V2[3]);

        string result = kangaroo(x1, v1, x2, v2);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
