import { connect } from '@/dbConfig/dbConfig';
import { NextRequest, NextResponse } from 'next/server';
import User from '@/Models/userModel';
import bcrypt from 'bcrypt';
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, email, password } = reqBody;
    //check if user exists
    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: 'There is already a user with this email' },
        { status: 400 }
      );
    }
    if (username == '' || email == '' || password == '') {
      return NextResponse.json(
        { error: 'Please fill in all the form' },
        { status: 400 }
      );
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();
    console.log('saved user is : ' + savedUser);
    return NextResponse.json(
      { message: 'User created successfully' },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { error: 'Something Went wrong' + error.message },
      { status: 500 }
    );
  }
}
