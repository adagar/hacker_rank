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

    // Complete the countingValleys function below.
    static int countingValleys(int n, string s) {
        var totSteps = 0;
        bool enteredValley = false;
        var elevation = 0;
        var valleyCount = 0;
        foreach(var step in s)
        {
            //am I going downhill?
            if(step == 'D')
            {
                if(elevation == 0)
                {
                    enteredValley = true;
                } 
                elevation -= 1;
            }
            else
            {     
                elevation += 1;
                if(elevation == 0 && enteredValley == true)
                {
                    valleyCount++;
                    enteredValley = false;
                }
                
            }
                //have I gone beneath sea level?
                    //I have entered a valley
            //am I going uphill?
                //am I in a valley?
                    //have I gone above sea level?
                        //valley complete!
        }
        
        return valleyCount;

    }

    static void Main(string[] args) {
        TextWriter textWriter = new StreamWriter(@System.Environment.GetEnvironmentVariable("OUTPUT_PATH"), true);

        int n = Convert.ToInt32(Console.ReadLine());

        string s = Console.ReadLine();

        int result = countingValleys(n, s);

        textWriter.WriteLine(result);

        textWriter.Flush();
        textWriter.Close();
    }
}
