﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Backend1.Services
{
    public interface IRandomService
    {
        Int32 RandInt();
        String RandOperator();
    }
}
