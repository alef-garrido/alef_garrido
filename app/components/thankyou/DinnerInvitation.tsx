import React, { useState } from 'react';
import { Calendar } from '../ui/calendar';
import { CalendarDays, ChefHat, Utensils, PartyPopper } from 'lucide-react';
import { Button } from '../ui/button';
import { format } from 'date-fns';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '../ui/popover';
import { cn } from '../../lib/utils/utils';

// NOTE: If you see an error for 'date-fns', run: npm install date-fns

interface DinnerInvitationProps {
  profileType: 'Visionario' | 'Administrador' | 'Operador';
  onReservation?: (date: Date) => void;
}

const DinnerInvitation: React.FC<DinnerInvitationProps> = ({ profileType, onReservation }) => {
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [showThankYou, setShowThankYou] = useState(false);

  // Get settings based on profile type
  const getSettings = () => {
    switch (profileType) {
      case 'Visionario':
        return {
          bgColor: 'bg-gradient-to-br from-purple-100 to-indigo-100',
          borderColor: 'border-purple-300',
          buttonBg: 'bg-purple-600 hover:bg-purple-700',
          iconColor: 'text-purple-600',
          headerColor: 'text-purple-800',
          textColor: 'text-purple-900',
          accent: 'purple',
          disabledDates: { before: new Date() }
        };
      case 'Administrador':
        return {
          bgColor: 'bg-gradient-to-br from-blue-50 to-cyan-100',
          borderColor: 'border-blue-300',
          buttonBg: 'bg-blue-500 hover:bg-blue-600',
          iconColor: 'text-blue-500',
          headerColor: 'text-blue-800',
          textColor: 'text-blue-900',
          accent: 'blue',
          disabledDates: { before: new Date() }
        };
      case 'Operador':
        return {
          bgColor: 'bg-gradient-to-br from-orange-50 to-amber-100',
          borderColor: 'border-orange-300',
          buttonBg: 'bg-orange-500 hover:bg-orange-600',
          iconColor: 'text-orange-500',
          headerColor: 'text-orange-800',
          textColor: 'text-orange-900',
          accent: 'orange',
          disabledDates: { before: new Date() }
        };
      default:
        return {
          bgColor: 'bg-gradient-to-br from-gray-100 to-slate-100',
          borderColor: 'border-gray-300',
          buttonBg: 'bg-gray-500 hover:bg-gray-600',
          iconColor: 'text-gray-600',
          headerColor: 'text-gray-800',
          textColor: 'text-gray-900',
          accent: 'gray',
          disabledDates: { before: new Date() }
        };
    }
  };

  const settings = getSettings();
  
  // Generate some available dates (next 2 months, only Thursdays and Fridays)
  const today = new Date();
  const twoMonthsLater = new Date();
  twoMonthsLater.setMonth(today.getMonth() + 2);
  
  const isDateAvailable = (date: Date) => {
    const day = date.getDay();
    // Only Thursdays (4) and Fridays (5) are available
    return (day === 4 || day === 5);
  };
  
  const handleConfirmReservation = () => {
    if (date && onReservation) {
      onReservation(date);
    }
    setShowThankYou(true);
  };

  return (
    <div className={`mt-12 rounded-xl p-6 shadow-md border ${settings.borderColor} ${settings.bgColor}`}>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        {/* Left side - Invitation text */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <PartyPopper className={`h-6 w-6 ${settings.iconColor}`} />
            <h3 className={`text-xl font-semibold ${settings.headerColor}`}>Invitación Especial</h3>
          </div>
          
          <p className={`mb-4 ${settings.textColor}`}>
            Te invitamos a una cena exclusiva para {profileType}s donde podrás:
          </p>
          
          <ul className={`space-y-2 mb-6 ${settings.textColor}`}>
            <li className="flex items-start">
              <ChefHat className={`h-5 w-5 mr-2 mt-0.5 ${settings.iconColor}`} />
              <span>Desarrollar tus fortalezas con expertos en tu área</span>
            </li>
            <li className="flex items-start">
              <Utensils className={`h-5 w-5 mr-2 mt-0.5 ${settings.iconColor}`} />
              <span>Conectar con perfiles complementarios al tuyo</span>
            </li>
            <li className="flex items-start">
              <PartyPopper className={`h-5 w-5 mr-2 mt-0.5 ${settings.iconColor}`} />
              <span>Participar en actividades diseñadas para tu perfil</span>
            </li>
          </ul>
          
          {!showThankYou ? (
            <p className={`text-sm italic ${settings.textColor} opacity-80`}>
              Selecciona una fecha disponible para reservar tu lugar.
            </p>
          ) : (
            <div className={`p-4 rounded-lg bg-white/70 ${settings.textColor}`}>
              <p className="font-medium">¡Gracias por tu reserva!</p>
              <p className="text-sm mt-1">
                Te enviaremos los detalles de la cena a tu correo electrónico.
              </p>
              {date && (
                <p className="text-xs mt-2 font-medium">
                  Fecha seleccionada: {format(date, "dd/MM/yyyy")}
                </p>
              )}
            </div>
          )}
        </div>
        
        {/* Right side - Calendar */}
        <div className="flex-1 flex flex-col items-center">
          <div className={`flex items-center gap-2 mb-4 ${settings.headerColor}`}>
            <CalendarDays className={`h-5 w-5 ${settings.iconColor}`} />
            <h4 className="font-medium">Reserva tu lugar</h4>
          </div>
          
          {!showThankYou ? (
            <>
              <Popover>
                <PopoverTrigger asChild>
                  <Button 
                    variant="outline" 
                    className={cn(
                      "w-[240px] justify-start text-left font-normal border-2",
                      !date && "text-muted-foreground",
                      `hover:border-${settings.accent}-500`
                    )}
                  >
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>Selecciona una fecha</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    disabled={(date: Date) => {
                      // Disable dates that are not available
                      return !isDateAvailable(date) || date < today || date > twoMonthsLater;
                    }}
                    initialFocus
                    className={cn("p-3 pointer-events-auto")}
                  />
                </PopoverContent>
              </Popover>
              
              <Button
                onClick={handleConfirmReservation}
                className={`mt-4 ${settings.buttonBg} text-white`}
                disabled={!date}
              >
                Confirmar Reservación
              </Button>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-full">
              <PartyPopper className={`h-16 w-16 ${settings.iconColor} animate-pulse-subtle`} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DinnerInvitation;
