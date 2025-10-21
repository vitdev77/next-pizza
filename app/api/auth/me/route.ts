import { prisma } from '@/prisma/prisma-client';
import { getUserSession } from '@/shared/lib/get-user-session';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const user = await getUserSession();

    if (!user) {
      NextResponse.json(
        { message: '[USER_GET] Unauthorized / Вы не авторизованы' },
        { status: 401 }
      );
    }

    const data = await prisma.user.findUnique({
      where: {
        id: Number(user?.id),
      },
      select: {
        fullName: true,
        email: true,
        password: false,
      },
    });

    return NextResponse.json(data);
  } catch (err) {
    console.error(err);
    NextResponse.json({ message: '[USER_GET] Server error' }, { status: 500 });
  }
}
