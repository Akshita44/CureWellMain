﻿using SOTI.CureWell.DAL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;



namespace SOTI.CureWell.DAL.Interfaces
{
    public interface IBookAppointment
    {
        bool AddAppointment(BookAppointment bookAppointment);
    }
}